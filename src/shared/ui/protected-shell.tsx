import { ReactNode } from 'react';
import { auth } from '@/infrastructure/auth/auth';
import { redirect } from 'next/navigation';
import { DashboardShell } from '@/shared/ui/dashboard-layout';
import { Header } from '@/shared/ui/header';
import { listOrganizationsForUser } from '@/modules/organizations/api/organization-controller';
import { resolveActiveOrganizationId } from '@/modules/organizations/application/organization-service';

export async function ProtectedShell({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) redirect('/auth/sign-in');

  const organizations = await listOrganizationsForUser(session.user.id);
  const activeOrganizationId = await resolveActiveOrganizationId(session.user.id);

  return (
    <DashboardShell
      header={
        <Header
          organizations={organizations.map((org) => ({ id: org.id, name: org.name }))}
          activeOrganizationId={activeOrganizationId ?? undefined}
          userEmail={session.user.email}
        />
      }
    >
      {children}
    </DashboardShell>
  );
}
