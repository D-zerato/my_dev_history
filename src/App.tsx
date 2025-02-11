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
        {/* /:id로 시작하는 모든 경로에 대해 Layout 적용 */}
        <Route path="/:id" element={<Layout />}>
          {/* /1 경로로 접근 시 /1/projects로 리다이렉트 */}
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="career" element={<Career />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* 루트 경로 처리 (선택적) */}
        <Route path="/" element={<Navigate to="/1/projects" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
