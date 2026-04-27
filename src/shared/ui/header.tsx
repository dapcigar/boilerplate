import { OrganizationSwitcher } from '@/modules/organizations/components/organization-switcher';
import { UserMenu } from '@/modules/users/components/user-menu';

export function Header({
  organizations,
  activeOrganizationId,
  userEmail,
}: {
  organizations: { id: string; name: string }[];
  activeOrganizationId?: string;
  userEmail: string;
}) {
  return (
    <header className="flex items-center justify-between border-b bg-white p-4">
      <OrganizationSwitcher organizations={organizations} activeOrganizationId={activeOrganizationId} />
      <UserMenu email={userEmail} />
    </header>
  );
}
