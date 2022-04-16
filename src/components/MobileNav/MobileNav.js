import React, { useState } from 'react';
import { Wrapper } from './MobileNav.styles';

export const MobileNav = ({ show, setShow }) => {
  return (
    <Wrapper>
      <a>home</a>
      <a>standings</a>
      <a>Statistic</a>
      <a>Go live</a>
    </Wrapper>
  );
};
