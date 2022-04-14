import React from 'react';
import { Wrapper, WidthWrapper, Column, Title, El, Contact, Wrap, Socials } from './Footer.styles';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';

export const Footer = () => {
  const iconsStyles = {
    color: '#454545',
    fontSize: '32px',
    // padding: '0 10px',
    margin: '0 10px',
  };

  return (
    <Wrapper>
      <WidthWrapper>
        <Column>
          <Title isList>Home</Title>
          <El>Home</El>
          <El>Home</El>
          <El>Home</El>
        </Column>
        <Column>
          <Title isList>Home</Title>
          <El>Home</El>
          <El>Home</El>
          <El>Home</El>
        </Column>
        <Socials>
          <AiFillGithub style={iconsStyles} />
          <AiFillLinkedin style={iconsStyles} />
          <AiFillTwitterCircle style={iconsStyles} />
          <AiFillFacebook style={iconsStyles} />
        </Socials>
        <Wrap>
          <Title>Contact with us</Title>
          <Contact></Contact>
        </Wrap>
      </WidthWrapper>
    </Wrapper>
  );
};
