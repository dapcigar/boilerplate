import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl p-10">
      <h1 className="text-4xl font-bold">Premium SaaS Boilerplate</h1>
      <p className="mt-4 text-muted">Domain-driven Next.js App Router architecture for serious products.</p>
      <Link href="/auth/sign-in" className="mt-6 inline-block rounded bg-primary px-4 py-2 text-white">Get Started</Link>
    </div>
  );
}
