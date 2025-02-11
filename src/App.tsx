import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Projects from './page/project/Projects';
import Career from './page/Career';
import About from './page/About';
import Layout from './shared/components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Layout />}>
          <Route path="/:id" element={<Navigate to="projects" replace />} />
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="career" element={<Career />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
