import { auditEnabled } from '@/modules/audit/domain/audit-policy';
import { createAuditLog } from '@/modules/audit/infrastructure/audit-repo';
import type { AuditAction } from '@/modules/audit/types/audit.types';

export async function trackAuditEvent(organizationId: string, actorId: string, action: AuditAction) {
  if (!auditEnabled()) return null;
  return createAuditLog(organizationId, actorId, action);
}
