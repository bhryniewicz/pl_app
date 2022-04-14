import React from 'react';
import { Wrapper, WidthWrapper, Column, Title, El, Socials } from './Footer.styles';
import { ContactForm } from 'components/ContactForm/ContactForm';
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
          <Title>Home</Title>
          <El>Home</El>
          <El>Home</El>
          <El>Home</El>
          <Title isList>Home</Title>
          <El>Home</El>
          <El>Home</El>
          <El>Home</El>
        </Column>
        <Column>
          <Title>Home</Title>
          <El>Home</El>
          <El>Home</El>
          <El>Home</El>
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
        <ContactForm />
      </WidthWrapper>
    </Wrapper>
  );
};
