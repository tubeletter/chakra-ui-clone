import { AvatarStyle } from './Avatar.styled';
import Image from 'next/image';
export type AvatarSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type AvatarStyleProps = {
  size: AvatarSize;
  badge?: 'on' | 'off';
  img?: string;
  userName?: string;
};
export type AvatarProps = AvatarStyleProps & {};
const AvatarIcon = () => {
  return (
    <svg width="86" height="102" viewBox="0 0 86 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id=".svg"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8375 24.7902C17.8375 11.0969 29.0991 0 42.9957 0C56.8923 0 68.1623 11.0969 68.1623 24.7902C68.1623 38.4918 56.8923 49.5887 42.9957 49.5887C29.0991 49.5887 17.8375 38.4918 17.8375 24.7902ZM43.1792 101.333C59.7936 101.333 74.8293 94.779 85.6666 84.2347V76.7546C85.6666 67.7096 78.0293 60.3688 68.6 60.3688H17.4C7.97064 60.3688 0.333313 67.7096 0.333313 76.7546V83.8579C11.1962 94.6152 26.3771 101.333 43.1792 101.333Z"
        fill="currentColor"
      />
    </svg>
  );
};
const Avatar = ({ size, userName, img, badge = 'on' }: AvatarProps) => {
  return (
    <AvatarStyle $props={{ size, img, userName, badge }}>
      {/* 1. userName 존재하고 이미지 없을경우  */}
      {userName && !img && <span className="user-name">{userName}</span>}
      {/* 2.이미지 존재할 경우  */}
      {img && <Image src={img} alt={'이미지'} fill />}
      {/* 3. userName존재하지 않고 이미지 존재하지않을경우 */}
      {!img && !userName && <AvatarIcon />}
    </AvatarStyle>
  );
};

export default Avatar;
