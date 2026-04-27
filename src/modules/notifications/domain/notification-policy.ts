import { isFeatureEnabled } from '@/config/features';

export function notificationsEnabled() {
  return isFeatureEnabled('notifications');
}
