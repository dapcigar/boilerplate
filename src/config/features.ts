export const features = {
  billing: true,
  teams: true,
  notifications: true,
  audit: true,
} as const;

export type FeatureKey = keyof typeof features;

export function isFeatureEnabled(feature: FeatureKey): boolean {
  return features[feature];
}
