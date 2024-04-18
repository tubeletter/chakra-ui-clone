import styled, { css } from 'styled-components';
import { tabType } from './tab.types';

export const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => theme.spacings[4]} ${({ theme }) => theme.spacings[1]};
    background-color: transparent;
  `,
  md: css`
    padding: ${({ theme }) => theme.spacings[4]} ${({ theme }) => theme.spacings[2]};
    background-color: transparent;
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacings[4]} ${({ theme }) => theme.spacings[3]};
    background-color: transparent;
  `
};

export const styles = {
  unstyled: css`
    border: none;
    background-color: transparent;
  `,
  line: css`
    border-bottom: 2px solid ${({ theme }) => theme.color.blue[600]};
    color: ${({ theme }) => theme.color.blue[600]};
  `,
  enclosed: css`
    border-radius: ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md} 0rem 0rem;
    background-color: ${({ theme }) => theme.color.white.white};
    border-top: ${({ theme }) => theme.spacings.px} solid ${({ theme }) => theme.color.gray[200]};
    border-left: ${({ theme }) => theme.spacings.px} solid ${({ theme }) => theme.color.gray[200]};
    border-right: ${({ theme }) => theme.spacings.px} solid ${({ theme }) => theme.color.gray[200]};
    color: ${({ theme }) => theme.color.blue[600]};
  `,
  softRounded: css`
    border-radius: 999px;
    background-color: ${({ theme }) => theme.color.blue[100]};
    color: ${({ theme }) => theme.color.blue[700]};
  `,
  solidRounded: css`
    border-radius: 999px;
    background-color: ${({ theme }) => theme.color.blue[600]};
    color: ${({ theme }) => theme.color.white.white};
  `
};

const TabBtn = styled.div<tabType>`
  if(active) {
    ${({ style }) => styles[style]}
  }
  ${({ size }) => sizeStyles[size]!}
`;

// TODO
// size = sm md lg  프롭스로 전달 후
// {({size))=> size === 'sm' && } 식으로 작업하여 동적 작업하기.
const Tab = ({ size, style, active, text = 'Tabs' }: tabType) => {
  //rounded = fsz  semibold 그외 medium

  return (
    <>
      <div>
        {/*<TabBtn size="sm" style="unstyled">*/}
        <TabBtn size={size} style={style} active={active}>
          {text}
        </TabBtn>
      </div>
      <div></div>
    </>
  );
};

export default Tab;
