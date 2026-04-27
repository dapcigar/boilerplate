'use client';

import { useRouter } from 'next/navigation';

type Org = { id: string; name: string };

export function OrganizationSwitcher({ organizations, activeOrganizationId }: { organizations: Org[]; activeOrganizationId?: string; }) {
  const router = useRouter();

  return (
    <select
      defaultValue={activeOrganizationId}
      className="rounded border p-2 text-sm"
      onChange={async (e) => {
        await fetch('/api/organizations/switch', {
          method: 'POST',
          body: JSON.stringify({ organizationId: e.target.value }),
        });
        router.refresh();
      }}
    >
      {organizations.map((org) => (
        <option key={org.id} value={org.id}>
          {org.name}
        </option>
      ))}
    </select>
  );
}
