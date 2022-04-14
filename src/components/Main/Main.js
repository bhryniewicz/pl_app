import React from 'react';
import { Landing } from 'components/Landing/Landing';
import { Cards } from 'components/Cards/Cards';
import { ShowOffers } from 'components/ShowOffers/ShowOffers';

export const Main = () => {
  return (
    <>
      <Landing />
      <Cards />
      <ShowOffers />
    </>
  );
};
