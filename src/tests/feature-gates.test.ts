import { describe, expect, it } from 'vitest';
import { isFeatureEnabled } from '@/config/features';

describe('feature flags', () => {
  it('enables billing', () => {
    expect(isFeatureEnabled('billing')).toBe(true);
  });
});
