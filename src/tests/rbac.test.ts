import { describe, expect, it } from 'vitest';
import { hasRequiredRole } from '@/modules/auth/domain/rbac';

describe('RBAC', () => {
  it('allows owner for admin resources', () => {
    expect(hasRequiredRole('OWNER', 'ADMIN')).toBe(true);
  });

  it('blocks member for admin resources', () => {
    expect(hasRequiredRole('MEMBER', 'ADMIN')).toBe(false);
  });
});
