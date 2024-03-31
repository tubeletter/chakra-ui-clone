'use client';
import styled from './page.module.scss';

export default function Page(): JSX.Element {
  return (
    <main>
      <div className={styled.sass}>foundation 확인</div>
      <div className={styled.sass2}>foundation import 적용!</div>
      <div className={styled.sass3}>foundation3 import 적용!</div>
    </main>
  );
}
