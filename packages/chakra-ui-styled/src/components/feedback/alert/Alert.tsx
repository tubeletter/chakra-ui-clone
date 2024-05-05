import styled, { css } from 'styled-components';
import Icon from './Icon';
import { alertType } from './Alert.stories';

const demoTitle: alertType['title'] = 'Title';
const demoText: alertType['text'] = 'This is a description.';

const Alert = ({ style, variant, title = demoTitle, text = demoText }: alertType) => {
  return (
    <Container style={style} variant={variant}>
      <Icon style={style} />
      <TextBox>
        <h5>{title}</h5>
        <p>{text}</p>
      </TextBox>
    </Container>
  );
};

const Container = styled.article<alertType>`
  display: flex;
  align-items: center;
  width: 400px;
  height: 72px;
  ${({ theme, variant }) => css`
    background-color: ${variant === 'info'
      ? theme.color.blue['100']
      : variant === 'warning'
        ? theme.color.orange['100']
        : variant === 'error'
          ? theme.color.red['100']
          : variant === 'success'
            ? theme.color.green['100']
            : null};
  `};
  ${({ variant, style, theme }) => css`
    ${style === 'left-border'
      ? css`
          border-left-color:${
            variant === 'info'
              ? theme.color.blue['500']
              : variant === 'warning'
                ? theme.color.orange['500']
                : variant === 'error'
                  ? theme.color.red['500']
                  : variant === 'success'
                    ? theme.color.green['500']
                    : null
          }
          border-left-style: solid;
          border-left-width: 4px;
        `
      : style === 'top-border'
        ? css`
            border-top-color:${
              variant === 'info'
                ? theme.color.blue['500']
                : variant === 'warning'
                  ? theme.color.orange['500']
                  : variant === 'error'
                    ? theme.color.red['500']
                    : variant === 'success'
                      ? theme.color.green['500']
                      : null
            }
            border-top-style: solid;
            border-top-width: 4px;
          `
        : style === 'solid'
          ? css`
              background-color: ${
                variant === 'info'
                  ? theme.color.blue['500']
                  : variant === 'warning'
                    ? theme.color.orange['500']
                    : variant === 'error'
                      ? theme.color.red['500']
                      : variant === 'success'
                        ? theme.color.green['500']
                        : null
              }
              color: ${theme.color.white.white};
            `
          : null}
  `}
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 17px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Alert;
