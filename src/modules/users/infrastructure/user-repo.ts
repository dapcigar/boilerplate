import { prisma } from '@/infrastructure/db/prisma';
import type { UpdateProfileInput } from '@/modules/users/types/user.types';

export async function updateUserProfile(userId: string, input: UpdateProfileInput) {
  return prisma.user.update({ where: { id: userId }, data: input });
}
