import { trackAuditEvent } from '@/modules/audit/application/audit-service';

export async function recordAudit(organizationId: string, actorId: string, action: string, entityType: string, entityId: string) {
  return trackAuditEvent(organizationId, actorId, { action, entityType, entityId });
}
