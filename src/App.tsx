import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Home } from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
};

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="detail" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
