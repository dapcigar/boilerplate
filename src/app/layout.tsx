import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium SaaS Boilerplate',
  description: 'Production-ready modular SaaS starter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
