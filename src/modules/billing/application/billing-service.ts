import { env } from '@/config/env';
import { stripe } from '@/infrastructure/payments/stripe';

export async function createCheckoutSession(input: { organizationId: string; customerEmail: string }) {
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    customer_email: input.customerEmail,
    line_items: [{ price: env.STRIPE_PRO_PRICE_ID, quantity: 1 }],
    success_url: `${env.APP_URL}/billing?success=true`,
    cancel_url: `${env.APP_URL}/billing?canceled=true`,
    metadata: { organizationId: input.organizationId },
  });
}
