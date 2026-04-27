import { auth } from '@/infrastructure/auth/auth';
import { resolveActiveOrganizationId } from '@/modules/organizations/application/organization-service';
import { startCheckout } from '@/modules/billing/api/billing-controller';
import { isFeatureEnabled } from '@/config/features';
import { fail, handleApiError, ok } from '@/shared/lib/api';

export async function POST() {
  try {
    if (!isFeatureEnabled('billing')) return fail('Billing disabled', 404);

    const session = await auth();
    if (!session?.user?.id || !session.user.email) return fail('Unauthorized', 401);

    const organizationId = await resolveActiveOrganizationId(session.user.id);
    if (!organizationId) return fail('No organization found', 400);

    const data = await startCheckout(organizationId, session.user.email);
    return ok(data);
  } catch (error) {
    return handleApiError(error);
  }
}
