import React from 'react';
import { Typography, Divider } from '@mui/material';
import TabPanel from '../shared/components/TabPanel';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../header/header.atom';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';

const Career = () => {
  const user = useAtomValue(UserAtom);

  return (
    <TabPanel>
      {user?.userCareers && user.userCareers.length > 0 && (
        <>
          <Typography variant="h4" sx={{ marginBottom: '16px' }}>
            경력
          </Typography>
          {user?.userCareers
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((career) => (
              <>
                <Typography variant="h5" sx={{ marginBottom: '5px' }} key={career.id}>
                  {career.companyName}
                </Typography>
                <Typography component="p" sx={{ marginBottom: '5px' }} key={career.id}>
                  {career.startDate && dayjs(career.startDate).format('YYYY-MM-DD')}
                  {career.endDate && ` - ${dayjs(career.endDate).format('YYYY-MM-DD')}`}
                  {(career.endDate &&
                    ` · ${dayjs(career.endDate).diff(career.startDate, 'month')} months`) ||
                    ' · recently'}
                </Typography>
                <ReactMarkdown>{career.description}</ReactMarkdown>
              </>
            ))}
          <Divider sx={{ backgroundColor: '#555', margin: '32px 0' }} />
        </>
      )}

      {user?.userActivities && user?.userActivities.length > 0 && (
        <>
          <Typography variant="h4" sx={{ marginBottom: '16px' }}>
            활동
          </Typography>
          {user?.userActivities
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((activity) => (
              <Typography component="p" sx={{ marginBottom: '32px' }} key={activity.id}>
                {activity.name}
                <br />
                <ReactMarkdown>{activity.description}</ReactMarkdown>
              </Typography>
            ))}
          <Divider sx={{ backgroundColor: '#555', margin: '32px 0' }} />
        </>
      )}

      {user?.userCertificates && user.userCertificates.length > 0 && (
        <>
          <Typography variant="h4" sx={{ marginBottom: '16px' }}>
            자격증
          </Typography>
          {user?.userCertificates
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((certificate) => (
              <>
                <Typography variant="h5" sx={{ marginBottom: '5px' }} key={certificate.id}>
                  {certificate.name}
                </Typography>
                <Typography component="p" sx={{ marginBottom: '5px' }} key={certificate.id}>
                  {(certificate.acquisitionDate &&
                    `취득일 ${dayjs(certificate.acquisitionDate).format('YYYY-MM-DD')}`) ||
                    ''}
                </Typography>
                <ReactMarkdown>{certificate.description}</ReactMarkdown>
              </>
            ))}
        </>
      )}
    </TabPanel>
  );
};

export default Career;
