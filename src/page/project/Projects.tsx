import React, { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TabPanel from '../../shared/components/TabPanel';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../../header/header.atom';
import { ProjectQdoAtom } from './project.atom';
import { useFindProjects } from './project.event';

// 스타일 정의
const ProjectContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap', // 여러 줄로 나누기 위해 추가
  justifyContent: 'center',
  gap: '48px', // 프로젝트 카드 간 간격
  marginTop: '32px', // 상단 여백
});

const ProjectCard = styled(Box)({
  flex: '0 0 calc(50% - 24px)', // 한 줄에 2개씩, 간격 고려
  maxWidth: 'calc(50% - 24px)', // 최대 너비 설정
  textAlign: 'center',
  color: '#fff',
  marginBottom: '32px', // 카드 아래 여백
});

const ProjectImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px', // 이미지 모서리 둥글게 처리
  marginBottom: '16px', // 이미지와 텍스트 간 간격
});

const Projects = () => {
  // 샘플 프로젝트 데이터
  const user = useAtomValue(UserAtom);
  const projectQdo = useAtomValue(ProjectQdoAtom);
  const { data: projectsData, isLoading: isProjectsDataLoading } = useFindProjects(projectQdo);

  const projects = useMemo(() => {
    //
    if (!!projectsData && !isProjectsDataLoading) {
      return projectsData.content;
    }

    return [];
  }, [projectsData, isProjectsDataLoading]);

  return (
    <TabPanel>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '32px' }}>
        프로젝트
      </Typography>
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.thumbnailUrl} alt={project.name} />
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>
              {project.name}
            </Typography>
            <Typography component="p">{project.description}</Typography>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </TabPanel>
  );
};

export default Projects;
