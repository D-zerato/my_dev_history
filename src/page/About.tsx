import React from 'react';
import { Typography, Button } from '@mui/material';
import TabPanel from '../shared/components/TabPanel';
import { styled } from '@mui/material/styles';

const LinkButton = styled(Button)({
  backgroundColor: '#333',
  color: '#fff',
  marginRight: '8px',
  '&:hover': {
    backgroundColor: '#555',
  },
});

const About = () => {
  return (
    <TabPanel>
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        소개
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        운동하는 개발자
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        링크
      </Typography>
      <LinkButton href="#">GitHub</LinkButton>
      <LinkButton href="#">Blog</LinkButton>
      <LinkButton href="#">이메일</LinkButton>
    </TabPanel>
  );
};

export default About;
