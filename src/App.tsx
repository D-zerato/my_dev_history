import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Home } from './components/Home';

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
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
