/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { ReactNode } from 'react';
import Header from '../Header';
import * as C from './styles';

type Props = {
  children: ReactNode;
};

export function Theme({ children }: Props) {
  return (
    <C.Container>
      <Header />
      <C.Page>{children}</C.Page>
    </C.Container>
  );
}
