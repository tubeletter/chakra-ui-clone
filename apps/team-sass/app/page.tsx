'use client';
import styled from './page.module.scss';
import { Test } from '@chakra/ui-sass/test';

export default function Page(): JSX.Element {
  return (
    <main>
      <Test />
      <div className={styled.sass}>foundation 확인</div>
      <div className={styled.sass2}>foundation import 적용!</div>
    </main>
  );
}
