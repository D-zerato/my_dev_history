import React from 'react';
import { Typography } from '@mui/material';
import TabPanel from '../../shared/components/TabPanel';
import { useParams } from 'react-router-dom';
import { useFindProject } from './project.event';

const ProjectDetail = () => {
  //
  const { id } = useParams<{ id?: string }>();
  const { data: project, isLoading: isProjectLoading } = useFindProject(id || '');

  if (isProjectLoading || !project) {
    return <></>;
  }

  return (
    <TabPanel>
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        프로젝트 이름
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        {project.name}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        설명
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        {project.description}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        프로젝트 유형
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        {(project.projectTypes.length > 0 &&
          project.projectTypes.map((type) => type.name).join(', ')) ||
          ''}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        기술 스택
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        {(project.techs.length > 0 && project.techs.map((tech) => tech.name).join(', ')) || ''}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        성과
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        {(project.projectPerformances.length > 0 &&
          project.projectPerformances
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((performance) => performance.content)
            .join(', ')) ||
          ''}
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        트러블 슈팅
      </Typography>
      <Typography component="p" sx={{ marginBottom: '32px' }}>
        {(project.projectTroubleshootings.length > 0 &&
          project.projectTroubleshootings
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((troubleshooting) => troubleshooting.content)
            .join(', ')) ||
          ''}
      </Typography>
    </TabPanel>
  );
};

export default ProjectDetail;
