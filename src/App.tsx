import React from 'react';
import { Header } from './components/Header';
import { ContactSection } from './components/ContactSection';
import { Box, Container } from '@mui/material';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Header />
        <Box sx={{ my: 8 }}>
          <Projects />
        </Box>
      </Container>
      <ContactSection />
    </>
  );
}

export default App;
