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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/home/:id" element={<Home />} />
          <Route path="/project/:id/:projectId" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
