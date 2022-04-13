import React from 'react';
import { Wrapper, Title, ChartBackground, Paragraph } from './ShowOffers.styles';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const ShowOffers = () => {
  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Wrapper>
      <Title>
        Let <span>us</span> help in your journey
      </Title>
      <ChartBackground>
        <LineChart
          width={1000}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend verticalAlign="top" iconSize="12" />
          <Line type="linear" dataKey="pv" stroke="#FF9C6F" />
          <Line type="linear" dataKey="uv" stroke="#A1F582" />
        </LineChart>
      </ChartBackground>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic delectus
        perspiciatis dicta. Labore, exercitationem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempore, eius quaerat iste veritatis ea aliquid. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Exercitationem, autem. <span>here</span>
      </Paragraph>
    </Wrapper>
  );
};
