import { cookies } from 'next/headers';
import { getMembership, getUserOrganizations } from '@/modules/organizations/infrastructure/organization-repo';

const ORG_COOKIE = 'active_org_id';

export async function resolveActiveOrganizationId(userId: string): Promise<string | null> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(ORG_COOKIE)?.value;

  if (fromCookie) {
    const membership = await getMembership(userId, fromCookie);
    if (membership) return fromCookie;
  }

  const memberships = await getUserOrganizations(userId);
  return memberships[0]?.organizationId ?? null;
}
