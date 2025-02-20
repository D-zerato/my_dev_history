import React, { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TabPanel from '../../shared/components/TabPanel';
import { useAtomValue } from 'jotai';
import { ProjectQdoAtom } from './project.atom';
import { useFindProjects } from './project.event';
import { useNavigate, useParams } from 'react-router-dom';

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
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // 애니메이션 추가
  '&:hover': {
    transform: 'scale(1.05)', // 마우스 오버 시 확대 효과
    boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)', // 그림자 효과 추가
    cursor: 'pointer', // 마우스 커서 변경
  },
});

const ProjectImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px', // 이미지 모서리 둥글게 처리
  marginBottom: '16px', // 이미지와 텍스트 간 간격
});

const Projects = () => {
  //
  const navigate = useNavigate();

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
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} onClick={() => navigate(`${project.id}`)}>
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
