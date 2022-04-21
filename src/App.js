import { Header } from 'components/Header/Header';
import { Wrapper, WidthWrapper } from './App.styles';
import { Main } from 'components/Main/Main';
import { Stats } from 'components/Stats/Stats';
import { Footer } from 'components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Wrapper>
      <WidthWrapper>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </BrowserRouter>
      </WidthWrapper>
      <Footer />
    </Wrapper>
  );
};

export default App;
