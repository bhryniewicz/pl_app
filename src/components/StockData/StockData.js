import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Wrapper, Ticker, RateWrapper, TodayPrice, Proc } from './StockData.styles';

export const StockData = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=JC3NE709OioPeUcMNlp01sAL5KaCG2afieqBjIuj'
      )
      .then((res) => {
        console.log(res.data.data);
        setStock(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      {stock.map(({ ticker, price, name, day_open, currency }) => {
        let procentage = (price / day_open) * 10;
        let fixedProcentage = procentage.toFixed(2);

        if (day_open > price) {
          fixedProcentage = -fixedProcentage;
        }

        const usdFormat = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currency,
        }).format(price);
        console.log(usdFormat);
        return (
          <RateWrapper procentage={fixedProcentage} key={ticker}>
            <Ticker>
              {ticker}
              <span>{usdFormat}</span>
            </Ticker>
            <br />
            <TodayPrice>
              {name}
              <Proc procentage={fixedProcentage}>{fixedProcentage}%</Proc>
            </TodayPrice>
          </RateWrapper>
        );
      })}
    </Wrapper>
  );
};
