import React, { useState } from 'react';
import { Wrapper, NavEl, Image, NavButton, MenuWrapper, Title } from './Header.styles';
import { Diamond } from 'assets/images';
import { MobileNav } from 'components/MobileNav/MobileNav';
import { BsMenuButtonWide } from 'react-icons/bs';

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  const menuStyles = {
    fontSize: '24px',
    color: '#fff',
  };

  return (
    <MenuWrapper>
      <Wrapper>
        <NavEl>home</NavEl>
        <NavEl>standings</NavEl>
        <Image src={Diamond} alt="123" />
        <NavEl>Statistic</NavEl>
        <NavButton>Go live</NavButton>
      </Wrapper>
      <Wrapper mobile="true">
        <Title>
          Diamond
          <br />
          Rate
        </Title>
        {!show && <BsMenuButtonWide mobile="true" onClick={handleToggleMenu} style={menuStyles} />}
        {show && <MobileNav show={show} setShow={setShow} menuStyles={menuStyles} />}
      </Wrapper>
    </MenuWrapper>
  );
};
