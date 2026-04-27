import { isFeatureEnabled } from '@/config/features';

export function auditEnabled() {
  return isFeatureEnabled('audit');
}
