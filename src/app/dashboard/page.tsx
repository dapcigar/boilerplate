import { auth } from '@/infrastructure/auth/auth';
import { resolveActiveOrganizationId } from '@/modules/organizations/application/organization-service';
import { NotificationCenterPlaceholder } from '@/modules/notifications/components/notification-center';
import { AuditTimelinePlaceholder } from '@/modules/audit/components/audit-timeline';

export default async function DashboardPage() {
  const session = await auth();
  const activeOrgId = session?.user?.id ? await resolveActiveOrganizationId(session.user.id) : null;

  return (
    <div className="space-y-6">
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2 text-muted">Active organization: {activeOrgId ?? 'None selected'}</p>
      </section>
      <NotificationCenterPlaceholder />
      <AuditTimelinePlaceholder />
    </div>
  );
}
