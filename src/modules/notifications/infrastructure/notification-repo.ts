import { prisma } from '@/infrastructure/db/prisma';
import type { NotificationPayload } from '@/modules/notifications/types/notification.types';

export async function createNotification(userId: string, organizationId: string, payload: NotificationPayload) {
  return prisma.notification.create({
    data: { userId, organizationId, title: payload.title, body: payload.body },
  });
}
