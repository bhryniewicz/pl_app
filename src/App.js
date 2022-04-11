import { Header } from 'components/Header/Header';
import { Wrapper, WidthWrapper } from './App.styles';
import { Landing } from 'components/Landing/Landing';

const App = () => {
  return (
    <Wrapper>
      <WidthWrapper>
        <Header />
        <Landing />
      </WidthWrapper>
    </Wrapper>
  );
};

export default App;
