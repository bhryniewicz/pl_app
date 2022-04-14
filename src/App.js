import { Header } from 'components/Header/Header';
import { Wrapper, WidthWrapper } from './App.styles';
import { Landing } from 'components/Landing/Landing';
import { Cards } from 'components/Cards/Cards';
import { ShowOffers } from 'components/ShowOffers/ShowOffers';
import { Footer } from 'components/Footer/Footer';

const App = () => {
  return (
    <Wrapper>
      <WidthWrapper>
        <Header />
        <Landing />
        <Cards />
        <ShowOffers />
      </WidthWrapper>
      <Footer />
    </Wrapper>
  );
};

export default App;
