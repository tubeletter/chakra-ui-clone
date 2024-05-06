import styled from './Badge.module.scss';
import { IBadgeProps } from './Badge.types';

export const Badge = ({ variant, color, children }: IBadgeProps) => {
  return (
    <span
      className={`${color !== 'default' ? styled[`badge-${color}`] : styled.badge} ${
        variant !== 'default' ? styled[variant] : ``
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;
