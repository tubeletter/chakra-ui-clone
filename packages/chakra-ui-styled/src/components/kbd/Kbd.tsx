import { StyleText } from '../../foundation/typography/Text.styled';
import { KbdStyle } from './Kbd.styled';

export interface KbdProps {
  children: React.ReactNode;
}

const Kbd = ({ children }: KbdProps) => {
  return (
    <KbdStyle>
      <StyleText size="sm" weight="normal">
        {children}
      </StyleText>
    </KbdStyle>
  );
};

export default Kbd;
