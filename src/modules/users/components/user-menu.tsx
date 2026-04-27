import Link from 'next/link';

export function UserMenu({ email }: { email: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm">
      <span className="text-sm text-muted">{email}</span>
      <Link href="/settings" className="text-sm text-primary">Settings</Link>
    </div>
  );
}
