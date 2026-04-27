export type AuditAction = {
  action: string;
  entityType: string;
  entityId: string;
  metadata?: Record<string, unknown>;
};
