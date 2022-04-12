import { Header } from 'components/Header/Header';
import { Wrapper, WidthWrapper } from './App.styles';
import { Landing } from 'components/Landing/Landing';
import { Cards } from 'components/Cards/Cards';

const App = () => {
  return (
    <Wrapper>
      <WidthWrapper>
        <Header />
        <Landing />
        <Cards />
      </WidthWrapper>
    </Wrapper>
  );
};

export default App;
