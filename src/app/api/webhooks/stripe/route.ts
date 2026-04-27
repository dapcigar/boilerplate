import { headers } from 'next/headers';
import { SubscriptionPlan, SubscriptionStatus } from '@prisma/client';
import { isFeatureEnabled } from '@/config/features';
import { env } from '@/config/env';
import { stripe } from '@/infrastructure/payments/stripe';
import { upsertSubscriptionByStripe } from '@/modules/billing/infrastructure/subscription-repo';

function mapStatus(status: string): SubscriptionStatus {
  switch (status) {
    case 'active':
      return SubscriptionStatus.ACTIVE;
    case 'canceled':
      return SubscriptionStatus.CANCELED;
    case 'past_due':
      return SubscriptionStatus.PAST_DUE;
    default:
      return SubscriptionStatus.INCOMPLETE;
  }
}

export async function POST(req: Request) {
  if (!isFeatureEnabled('billing')) return Response.json({ ok: true });

  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) return new Response('Missing signature', { status: 400 });

  const event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET);

  if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.created') {
    const subscription = event.data.object;
    const organizationId = subscription.metadata.organizationId;

    if (organizationId) {
      await upsertSubscriptionByStripe({
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: String(subscription.customer),
        organizationId,
        status: mapStatus(subscription.status),
        plan: subscription.items.data[0]?.price.recurring ? SubscriptionPlan.PRO : SubscriptionPlan.FREE,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      });
    }
  }

  return Response.json({ received: true });
}
