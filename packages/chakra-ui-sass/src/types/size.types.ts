/**
 * Size 타입
 */
export const SizeTypes = {
  Large: 'lg',
  Medium: 'md',
  Small: 'sm'
} as const;

/**
 * 사이즈에 대한 타입 정의
 */
export type Large = typeof SizeTypes.Large;
export type Medium = typeof SizeTypes.Medium;
export type Small = typeof SizeTypes.Small;
