import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <h2 className="mb-6 text-xl font-bold">SaaS Boilerplate</h2>
      <nav className="space-y-2 text-sm">
        <Link href="/dashboard" className="block rounded px-3 py-2 hover:bg-slate-100">Dashboard</Link>
        <Link href="/settings" className="block rounded px-3 py-2 hover:bg-slate-100">Settings</Link>
        <Link href="/billing" className="block rounded px-3 py-2 hover:bg-slate-100">Billing</Link>
      </nav>
    </aside>
  );
}
