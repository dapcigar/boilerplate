import { auth } from '@/infrastructure/auth/auth';
import { updateCurrentUserProfile } from '@/modules/users/api/users-controller';
import { fail, handleApiError, ok } from '@/shared/lib/api';

export async function PATCH(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) return fail('Unauthorized', 401);

    const body = (await req.json()) as { name?: string; image?: string };
    if (!body.name) return fail('name is required');

    const data = await updateCurrentUserProfile(session.user.id, body.name, body.image);
    return ok(data);
  } catch (error) {
    return handleApiError(error);
  }
}
