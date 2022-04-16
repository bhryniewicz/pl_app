import React, { useEffect, useState } from 'react';
import { Wrapper, Card, SingleCardWrapper } from './Cards.styles';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export const Cards = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [cardNum, setCardNum] = useState(0);

  const arrowStyles = {
    fontSize: '45px',
    color: 'white',
    transform: 'translateX(10px)',
  };

  const arrowLeft = {
    ...arrowStyles,
    transform: 'translateX(-10px)',
  };

  const contentData = [
    {
      id: '1',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam?',
    },
    {
      id: '2',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam?',
    },
    {
      id: '3',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam?',
    },
  ];

  const incrementNum = () => {
    setCardNum(cardNum + 1);

    if (cardNum >= contentData.length - 1) {
      setCardNum(0);
    }
  };

  const decrementNum = () => {
    setCardNum(cardNum - 1);
    if (cardNum <= 0) {
      setCardNum(contentData.length - 1);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', () => handleWindowResize());

    return window.removeEventListener('resize', () => handleWindowResize);
  }, []);

  if (width > 416) {
    return (
      <Wrapper>
        {contentData.map(({ id, content }) => {
          return (
            <Card id={id} key={id}>
              {content}
            </Card>
          );
        })}
      </Wrapper>
    );
  } else {
    return (
      <SingleCardWrapper>
        <FiArrowLeft onClick={decrementNum} style={arrowLeft} />
        <Card id={contentData[cardNum]?.id}>{contentData[cardNum]?.content}</Card>
        <FiArrowRight onClick={incrementNum} style={arrowStyles} />
      </SingleCardWrapper>
    );
  }
};
