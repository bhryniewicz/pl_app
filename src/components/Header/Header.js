import React, { useEffect, useState } from 'react';
import { Wrapper, NavEl, Image, NavButton, MenuWrapper, Title } from './Header.styles';
import { Diamond } from 'assets/images';
import { MobileNav } from 'components/MobileNav/MobileNav';

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <MenuWrapper>
      <Wrapper>
        <NavEl>home</NavEl>
        <NavEl>standings</NavEl>
        <Image src={Diamond} alt="123" />
        <NavEl>Statistic</NavEl>
        <NavButton>Go live</NavButton>
      </Wrapper>
      <Wrapper mobile>
        <Title>
          Diamond
          <br />
          Rate
        </Title>
        <Image mobile src={Diamond} alt="123" onClick={handleToggleMenu} />
        {show && <MobileNav show={show} setShow={setShow} />}
      </Wrapper>
    </MenuWrapper>
  );
};
