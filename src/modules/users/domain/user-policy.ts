export function canEditOwnProfile(userId: string, targetUserId: string): boolean {
  return userId === targetUserId;
}
