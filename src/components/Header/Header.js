import React from 'react';
import { Wrapper, NavEl, Image, NavButton } from './Header.styles';
import { Diamond } from 'assets/images';

export const Header = () => {
  return (
    <Wrapper>
      <NavEl>home</NavEl>
      <NavEl>standings</NavEl>
      <Image src={Diamond} alt="123" />
      <NavEl>Statistic</NavEl>
      <NavButton>Go live</NavButton>
    </Wrapper>
  );
};
