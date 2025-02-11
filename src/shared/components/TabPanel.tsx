import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionBox = styled(Box)({
  color: '#fff',
  padding: '24px',
  maxWidth: '800px',
  margin: 'auto',
});

interface TabPanelProps {
  children?: React.ReactNode;
}

const TabPanel = ({ children }: TabPanelProps) => {
  return <SectionBox>{children}</SectionBox>;
};

export default TabPanel;
