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
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="/:id/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} /> {/* 추가 */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
