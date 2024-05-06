import { alertType } from './Alert.stories';

type IconProps = {
  alertStyle: alertType['alertStyle'];
  variant: alertType['variant'];
};
const Icon = ({ alertStyle, variant }: IconProps) => {
  let color;
  if (variant === 'info') {
    color = alertStyle === 'solid' ? '#fff' : '#3182ce';
    return (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
            fill={color}
          />
        </svg>
      </>
    );
  } else if (variant === 'error') {
    color = alertStyle === 'solid' ? '#fff' : '#e53e3e';
    return (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
            fill={color}
          />
        </svg>
      </>
    );
  } else if (variant === 'success') {
    color = alertStyle === 'solid' ? '#fff' : '#38a169';
    return (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
            fill={color}
          />
        </svg>
      </>
    );
  } else if (variant === 'warning') {
    color = alertStyle === 'solid' ? '#fff' : '#dd6b20';
    return (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
            fill={color}
          />
        </svg>
      </>
    );
  }
};

export default Icon;
