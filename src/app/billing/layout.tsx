import { ProtectedShell } from '@/shared/ui/protected-shell';

export default function BillingLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedShell>{children}</ProtectedShell>;
}
