import { redirect } from 'next/navigation';
import { auth } from '@/infrastructure/auth/auth';

export async function requireAuth() {
  const session = await auth();
  if (!session?.user?.id) redirect('/auth/sign-in');
  return session;
}
