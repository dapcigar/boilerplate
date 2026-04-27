import { SubscriptionPlan } from '@prisma/client';

export function canUseProFeature(plan: SubscriptionPlan): boolean {
  return plan === 'PRO';
}
