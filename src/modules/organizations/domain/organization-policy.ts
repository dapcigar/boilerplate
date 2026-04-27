import { OrganizationRole } from '@prisma/client';
import { hasRequiredRole } from '@/modules/auth/domain/rbac';

export function canManageOrganization(role: OrganizationRole): boolean {
  return hasRequiredRole(role, 'ADMIN');
}
