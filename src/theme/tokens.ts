export const colors = {
  primary: '#8b5cf6',
  background: '#0a0a0f',
  surface: '#15151f',
  champagne: '#e8c87a',
  text: '#f4f2ff',
  textMuted: '#9b93b3',
  error: '#f87171',
} as const;

export const fontSize = {
  small: 12,
  body: 15,
  title: 20,
} as const;

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
} as const;

export type ThemeColors = typeof colors;
