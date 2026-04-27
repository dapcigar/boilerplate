import { prisma } from '@/infrastructure/db/prisma';
import type { AuditAction } from '@/modules/audit/types/audit.types';

export async function createAuditLog(organizationId: string, actorId: string, input: AuditAction) {
  return prisma.auditLog.create({
    data: {
      organizationId,
      actorId,
      action: input.action,
      entityType: input.entityType,
      entityId: input.entityId,
      metadata: input.metadata,
    },
  });
}
