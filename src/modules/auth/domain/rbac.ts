import { OrganizationRole } from '@prisma/client';

const roleRank: Record<OrganizationRole, number> = {
  OWNER: 3,
  ADMIN: 2,
  MEMBER: 1,
};

export function hasRequiredRole(current: OrganizationRole, required: OrganizationRole): boolean {
  return roleRank[current] >= roleRank[required];
}
