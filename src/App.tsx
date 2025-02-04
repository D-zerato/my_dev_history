import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Home } from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index path="/home/:id" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
