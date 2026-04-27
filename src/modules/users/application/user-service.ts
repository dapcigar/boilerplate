import { canEditOwnProfile } from '@/modules/users/domain/user-policy';
import { updateUserProfile } from '@/modules/users/infrastructure/user-repo';

export async function updateMyProfile(currentUserId: string, targetUserId: string, name: string, image?: string) {
  if (!canEditOwnProfile(currentUserId, targetUserId)) {
    throw new Error('Forbidden');
  }

  return updateUserProfile(targetUserId, { name, image });
}
