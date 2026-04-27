import { prisma } from '@/infrastructure/db/prisma';

export async function getOrganizationSubscription(organizationId: string) {
  return prisma.subscription.findFirst({ where: { organizationId } });
}

export async function upsertSubscriptionByStripe(input: {
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  organizationId: string;
  status: 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'INCOMPLETE';
  plan: 'FREE' | 'PRO';
  currentPeriodEnd?: Date;
}) {
  return prisma.subscription.upsert({
    where: { stripeSubscriptionId: input.stripeSubscriptionId },
    update: input,
    create: input,
  });
}
