import React from 'react';
import { Wrapper } from './Landing.styles';
import { AnimatedSvg } from 'components/AnimatedSvg/AnimatedSvg';
import { Title, Description, Button, Paragraph } from './Landing.styles';

export const Landing = () => {
  return (
    <Wrapper>
      <Description>
        <Title>
          Find your chances with <span>us</span>
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repudiandae fugiat
          voluptatem laudantium saepe libero accusamus dolore rerum sit! Voluptatibus provident
          reiciendis delectus ipsam ab quasi saepe officia eos, error est exercitationem. Est facere
          nemo eveniet vero.
        </Paragraph>
        <Button>check</Button>
      </Description>
      <AnimatedSvg />
    </Wrapper>
  );
};
