import { forwardRef } from 'react';
import { Tag } from './Tooltip.styled';
import Button from '../../form/button/Button';

export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export interface TooltipProps {
  colorScheme?: colorSchemeType;
  children: React.ReactNode;
  label: string;
  placement?: string;
}

const StyleTooltip = forwardRef(({ children, ...rest }: TooltipProps, ref) => (
  <Tag ref={ref} {...rest}>
    {children}
  </Tag>
))

const ToolTip = () => {
  <StyleTooltip label='Hover me'>
    <Button size={'lg'} colorScheme={'gray'}/>
  </StyleTooltip>
}
export default ToolTip;
