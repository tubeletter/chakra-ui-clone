import styled, { css } from 'styled-components';
import { tabType } from './tab.types';
import { TextComponent } from '../../../../foundation/typography/Text';
//
// export const sizeStyles = {
//   sm: css`
//     padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[1]};
//     background-color: transparent;
//   `,
//   md: css`
//     padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[2]};
//     background-color: transparent;
//   `,
//   lg: css`
//     padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
//     background-color: transparent;
//   `
// };
//
// export const tabStyle = {
//   unstyled: css`
//     background-color: transparent;
//     border: none;
//   `,
//   line: css`
//     color: ${({ theme }) => theme.color.blue[600]};
//     border-bottom: 2px solid ${({ theme }) => theme.color.blue[600]};
//   `,
//   enclosed: css`
//     color: ${({ theme }) => theme.color.blue[600]};
//     background-color: ${({ theme }) => theme.color.white.white};
//     border-top: ${({ theme }) => theme.spacing.px} solid ${({ theme }) => theme.color.gray[200]};
//     border-right: ${({ theme }) => theme.spacing.px} solid ${({ theme }) => theme.color.gray[200]};
//     border-left: ${({ theme }) => theme.spacing.px} solid ${({ theme }) => theme.color.gray[200]};
//     border-radius: ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md} 0 0;
//   `,
//   softRounded: css`
//     color: ${({ theme }) => theme.color.blue[700]};
//     background-color: ${({ theme }) => theme.color.blue[100]};
//     border-radius: 999px;
//   `,
//   solidRounded: css`
//     color: ${({ theme }) => theme.color.white.white};
//     background-color: ${({ theme }) => theme.color.blue[600]};
//     border-radius: 999px;
//   `
// };

const TabBtn = styled.div<tabType>`
  ${({ theme, size, active, styleType }) => {
    const sizeStyles = {
      sm: css`
        padding: ${theme.spacing[1]} ${theme.spacing[4]};
      `,
      md: css`
        padding: ${theme.spacing[2]} ${theme.spacing[4]};
      `,
      lg: css`
        padding: ${theme.spacing[3]} ${theme.spacing[4]};
      `
    };
    const tabStyle = {
      unstyled: css`
        background-color: transparent !important;
        border: none;
      `,
      line: css`
        color: ${theme.color.blue[600]};
        background-color: transparent;
        border-bottom: 2px solid ${theme.color.blue[600]};
      `,
      enclosed: css`
        color: ${theme.color.blue[600]};
        background-color: ${theme.color.white.white} !important;
        border-top: ${theme.spacing.px} solid ${theme.color.gray[200]};
        border-right: ${theme.spacing.px} solid ${theme.color.gray[200]};
        border-left: ${theme.spacing.px} solid ${theme.color.gray[200]};
        border-radius: ${theme.radii.md} ${theme.radii.md} 0 0;
      `,
      softRounded: css`
        color: ${theme.color.blue[700]};
        background-color: ${theme.color.blue[100]} !important;
        border-radius: 999px;
      `,
      solidRounded: css`
        color: ${theme.color.white.white};
        background-color: ${theme.color.blue[600]} !important;
        border-radius: 999px;
      `
    };
    return css`
      ${active && tabStyle[styleType]}
      ${sizeStyles[size]}
    `;
  }}
`;

// TODO
// size = sm md lg  프롭스로 전달 후
// {({size))=> size === 'sm' && } 식으로 작업하여 동적 작업하기.
const Tab = ({ size, styleType, active, text = 'Tabs' }: tabType) => {
  //rounded = fsz  semibold 그외 medium

  return (
    <>
      <div>
        {/*<TabBtn size="sm" style="unstyled">*/}
        <TabBtn size={size} styleType={styleType} active={active}>
          {text}
        </TabBtn>
      </div>
      <div></div>
    </>
  );
};

export default Tab;
