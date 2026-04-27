import { prisma } from '@/infrastructure/db/prisma';
import { hashPassword } from '@/modules/auth/infrastructure/password';

export async function signUpWithEmail(email: string, password: string, name?: string) {
  const passwordHash = await hashPassword(password);
  return prisma.user.create({ data: { email, passwordHash, name } });
}
