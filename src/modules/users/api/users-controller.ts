import { updateMyProfile } from '@/modules/users/application/user-service';

export async function updateCurrentUserProfile(userId: string, name: string, image?: string) {
  return updateMyProfile(userId, userId, name, image);
}
