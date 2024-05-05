import { alertType } from './Alert.stories';

const Icon = ({ variant, color }: alertType) => {
  // error 아이콘
  // success 아이콘
  // warning 아이콘
  // info 아이콘
  if (variant === 'vanilla') {
    return (
      <>
        <svg width="current" height="current" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
            fill="#E53E3E"
          />
        </svg>
      </>
    );
  }
};

export default Icon;
