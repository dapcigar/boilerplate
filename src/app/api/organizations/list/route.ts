import { auth } from '@/infrastructure/auth/auth';
import { listOrganizationsForUser } from '@/modules/organizations/api/organization-controller';
import { handleApiError, ok, fail } from '@/shared/lib/api';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) return fail('Unauthorized', 401);

    const data = await listOrganizationsForUser(session.user.id);
    return ok(data);
  } catch (error) {
    return handleApiError(error);
  }
}
