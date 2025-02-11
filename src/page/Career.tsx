import React from 'react';
import { Typography } from '@mui/material';
import TabPanel from '../shared/components/TabPanel';

const Career = () => {
  return (
    <TabPanel>
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        경력
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        첫번째 회사 (????.??.?? ~ ????..??)
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        서울 / 백엔드 개발자
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        활동
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        활동 이름 (????.??.?? ~ ????..??)
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        자격증
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        자격증 이름 (????.??.?? ~ ????..??)
      </Typography>
    </TabPanel>
  );
};

export default Career;
