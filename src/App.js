import { Header } from 'components/Header/Header';
import { Wrapper, WidthWrapper } from './App.styles';
import { Main } from 'components/Main/Main';
import { Footer } from 'components/Footer/Footer';

const App = () => {
  return (
    <Wrapper>
      <WidthWrapper>
        <Header />
        <Main />
      </WidthWrapper>
      <Footer />
    </Wrapper>
  );
};

export default App;
