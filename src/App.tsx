import React from 'react';
import './App.css';
import { Layout } from './ui/Layout';
import Dashboard from './ui/template/Dashboard';

function App() {
  return (
    <div className="App">
      <Layout>
        <>
          <Dashboard />
        </>
      </Layout>
    </div>
  );
}

export default App;
