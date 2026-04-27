import { getUserOrganizations } from '@/modules/organizations/infrastructure/organization-repo';

export async function listOrganizationsForUser(userId: string) {
  const memberships = await getUserOrganizations(userId);
  return memberships.map((membership) => ({
    id: membership.organization.id,
    name: membership.organization.name,
    slug: membership.organization.slug,
    role: membership.role,
  }));
}
