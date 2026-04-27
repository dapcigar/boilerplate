import { createCheckoutSession } from '@/modules/billing/application/billing-service';

export async function startCheckout(organizationId: string, customerEmail: string) {
  const session = await createCheckoutSession({ organizationId, customerEmail });
  return { checkoutUrl: session.url };
}
