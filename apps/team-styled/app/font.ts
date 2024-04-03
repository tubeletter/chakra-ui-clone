import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard' // css 변수로 등록하기 위함
});
