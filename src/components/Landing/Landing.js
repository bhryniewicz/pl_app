import React from 'react';
import { Wrapper } from './Landing.styles';
import { AnimatedSvg } from 'components/AnimatedSvg/AnimatedSvg';
import { Title, Description, Button, Paragraph } from './Landing.styles';
import { AiOutlineAreaChart } from 'react-icons/ai';

const chartStyle = {
  marginBottom: '6px',
};

export const Landing = () => {
  return (
    <Wrapper>
      <Description>
        <Title>
          Find your chances with{' '}
          <span>
            us
            <AiOutlineAreaChart style={chartStyle} />
          </span>
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
