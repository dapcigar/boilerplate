import { cookies } from 'next/headers';
import { auth } from '@/infrastructure/auth/auth';
import { getMembership } from '@/modules/organizations/infrastructure/organization-repo';
import { handleApiError, ok, fail } from '@/shared/lib/api';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) return fail('Unauthorized', 401);

    const body = (await req.json()) as { organizationId?: string };
    if (!body.organizationId) return fail('organizationId is required');

    const membership = await getMembership(session.user.id, body.organizationId);
    if (!membership) return fail('Forbidden', 403);

    const cookieStore = await cookies();
    cookieStore.set('active_org_id', body.organizationId, { httpOnly: true, sameSite: 'lax' });
    return ok({ organizationId: body.organizationId });
  } catch (error) {
    return handleApiError(error);
  }
}
