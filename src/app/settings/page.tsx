import { auth } from '@/infrastructure/auth/auth';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user) redirect('/auth/sign-in');

  return (
    <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-muted">Manage your profile and preferences.</p>
      <div className="rounded border p-3 text-sm">Email: {session.user.email}</div>
    </div>
  );
}
