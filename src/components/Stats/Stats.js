import React from 'react';
import { StockData } from 'components/StockData/StockData';
import { AnimatedSvgStats } from 'components/AnimatedSvg/AnimatedSvg';
import { Wrapper } from './Stats.styles';
import { Title, Paragraph, Description } from 'components/Landing/Landing.styles';

export const Stats = () => {
  return (
    <>
      <Wrapper>
        <Description>
          <Title>
            Show <span>us</span> what you can achieve
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolorum hic doloremque
            ea, doloribus perferendis sint facere consequuntur beatae quae praesentium deleniti
            facilis. Explicabo voluptatum ullam error delectus vel commodi sed consequuntur officia
            quos minus. Ea rerum beatae nesciunt qui.
          </Paragraph>
        </Description>
        <AnimatedSvgStats />
      </Wrapper>
      <StockData />
    </>
  );
};
