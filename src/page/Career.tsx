import React from 'react';
import { Typography } from '@mui/material';
import TabPanel from '../shared/components/TabPanel';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../header/header.atom';

const Career = () => {
  //
  const user = useAtomValue(UserAtom);

  return (
    <TabPanel>
      {user?.userCareers && user.userCareers.length > 0 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: '16px' }}>
            경력
          </Typography>
          {user?.userCareers
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((career) => (
              <Typography component="p" sx={{ marginBottom: '32px' }}>
                {career.companyName}
                <br />
                {career.description}
              </Typography>
            ))}
        </>
      )}

      {user?.userActivities && user?.userActivities.length > 0 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: '16px' }}>
            활동
          </Typography>
          {user?.userActivities
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((activity) => (
              <Typography component="p" sx={{ marginBottom: '32px' }}>
                {activity.name}
                <br />
                {activity.description}
              </Typography>
            ))}
        </>
      )}

      {user?.userCertificates && user.userCertificates.length > 0 && (
        <>
          <Typography variant="h5" sx={{ marginBottom: '16px' }}>
            자격증
          </Typography>
          {user?.userCertificates
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((certificate) => (
              <Typography component="p" sx={{ marginBottom: '32px' }}>
                {certificate.name}
                <br />
                {certificate.description}
              </Typography>
            ))}
        </>
      )}
    </TabPanel>
  );
};

export default Career;
