import React from 'react';
import { Wrapper, El, ElWrapper } from './MobileNav.styles';
import { BsDoorClosed } from 'react-icons/bs';

export const MobileNav = ({ show, setShow, menuStyles }) => {
  const handleCloseMenu = () => {
    setShow(!show);
  };

  const position = {
    ...menuStyles,
    alignSelf: 'flex-end',
  };

  return (
    <Wrapper>
      <BsDoorClosed onClick={handleCloseMenu} style={position} />
      <ElWrapper>
        <El>home</El>
        <El>standings</El>
        <El>Statistic</El>
        <El>Go live</El>
      </ElWrapper>
    </Wrapper>
  );
};
