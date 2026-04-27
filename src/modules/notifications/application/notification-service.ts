import { notificationsEnabled } from '@/modules/notifications/domain/notification-policy';
import { createNotification } from '@/modules/notifications/infrastructure/notification-repo';

export async function enqueueSystemNotification(userId: string, organizationId: string, title: string, body: string) {
  if (!notificationsEnabled()) return null;

  // Placeholder for email/SMS/webhook integrations.
  return createNotification(userId, organizationId, { title, body });
}
