import { ReactNode } from 'react';
import { Sidebar } from '@/shared/ui/sidebar';

export function DashboardShell({ header, children }: { header: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        {header}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
