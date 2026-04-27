import { ProtectedShell } from '@/shared/ui/protected-shell';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedShell>{children}</ProtectedShell>;
}
