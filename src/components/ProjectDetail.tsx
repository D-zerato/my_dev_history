import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { projectQdoAtom, projectsAtom, userAtom } from '../home/home.atom';
import { useAtom, useSetAtom } from 'jotai/index';
import { useFindEvent, useFindProjects } from '../home/home.event';
import dayjs from 'dayjs';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 14px;
`;

const ProjectSection = styled.div`
  margin: 1.5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 20px; // 크기 증가
  font-weight: 700; // 더 굵게
  color: #1a1a1a;
  margin: 2rem 0 1rem;
  letter-spacing: -0.5px; // 글자 간격 조정
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const TechTag = styled.span`
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #1a1a1a;
`;

const Role = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    background-color: #f5f5f5;
    padding: 6px;
    border-radius: 6px;
  }
`;

const DemoImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
`;

const ProjectDetail: React.FC = () => {
  //
  const params = useParams();

  const projects = useAtomValue(projectsAtom);

  const setUser = useSetAtom(userAtom);
  const [qdo, setQdo] = useAtom(projectQdoAtom);
  const { data: userData, isLoading: userLoading } = useFindEvent(params?.id || '');

  const setProjects = useSetAtom(projectsAtom);
  const { data: projectListResult, isLoading: projectLoading } = useFindProjects(qdo);

  useEffect(() => {
    //
    if (userData && !userLoading) {
      setUser(userData);
    }
  }, [userData, userLoading]);

  useEffect(() => {
    //
    if (params?.id !== '' && params?.id !== undefined) {
      setQdo({ ...qdo, userId: params?.id });
    }
  }, [params]);

  useEffect(() => {
    //
    if (projectListResult && !projectLoading) {
      setProjects(projectListResult.content);
    }
  }, [projectListResult, projectLoading]);

  const project = useMemo(() => {
    //
    if (!projects || !projects.length || !params?.projectId) return undefined;

    return projects.find((data) => data.id === Number(params?.projectId));
  }, [projects]);

  console.log(project);

  return (
    <Container>
      <ImageGallery>
        <img src={project?.thumbnailUrl} alt={project?.name} />
      </ImageGallery>

      <ProjectTitle>{project?.name}</ProjectTitle>
      <ProjectMeta>
        <span>Personal project</span>
        <span>•</span>
        <span>
          {project &&
            `${dayjs(project.startDate).format('MMM YYYY')} - ${dayjs(project.endDate).format('MMM YYYY')}`}
        </span>
        <span>•</span>
        <span>
          {project && dayjs(project.endDate).diff(dayjs(project.startDate), 'month')} month
        </span>
      </ProjectMeta>

      <ProjectSection>
        <SectionTitle>Description</SectionTitle>
        <p>{project?.description}</p>
      </ProjectSection>

      <ProjectSection>
        <SectionTitle>Technologies</SectionTitle>
        <TechStack>{project?.techs?.map((tech) => <TechTag>{tech.name}</TechTag>)}</TechStack>
      </ProjectSection>

      {/*<ProjectSection>*/}
      {/*  <SectionTitle>Role</SectionTitle>*/}
      {/*  <Role>*/}
      {/*    <span>🔧 Front-end Developer</span>*/}
      {/*  </Role>*/}
      {/*</ProjectSection>*/}
      {/*<ProjectSection>*/}
      {/*  <SectionTitle>Design System</SectionTitle>*/}
      {/*  <p>*/}
      {/*    The design system includes a set of reusable components such as buttons, inputs, and*/}
      {/*    modals. I used Storybook to document these components and TailwindCSS to style them. The*/}
      {/*    system is built with React and TypeScript, and I wrote unit tests for the components using*/}
      {/*    Jest and React Testing Library.*/}
      {/*  </p>*/}
      {/*</ProjectSection>*/}

      {/*<ProjectSection>*/}
      {/*  <SectionTitle>Demo</SectionTitle>*/}
      {/*  <DemoImage*/}
      {/*    src={process.env.PUBLIC_URL + '/images/ProjectContentsSample.png'}*/}
      {/*    alt="Project Demo"*/}
      {/*  />*/}
      {/*</ProjectSection>*/}

      {/*<ProjectSection>*/}
      {/*  <SectionTitle>Next Steps</SectionTitle>*/}
      {/*  <p>*/}
      {/*    In the future, I'd like to expand the design system to include more complex components,*/}
      {/*    such as data tables and charts. I also want to add accessibility features to ensure that*/}
      {/*    the components are usable by a wide range of users.*/}
      {/*  </p>*/}
      {/*</ProjectSection>*/}
    </Container>
  );

  // return (
  //   <Container>
  //     <ImageGallery>
  //       <img
  //         src={process.env.PUBLIC_URL + '/images/ProjectFrontSample.png'}
  //         alt="Project image 1"
  //       />
  //       <img
  //         src={process.env.PUBLIC_URL + '/images/ProjectFrontSample.png'}
  //         alt="Project image 2"
  //       />
  //       <img
  //         src={process.env.PUBLIC_URL + '/images/ProjectFrontSample.png'}
  //         alt="Project image 3"
  //       />
  //     </ImageGallery>
  //
  //     <ProjectTitle>Project 1: Design System</ProjectTitle>
  //     <ProjectMeta>
  //       <span>Personal project</span>
  //       <span>•</span>
  //       <span>Nov 2022 - Nov 2022</span>
  //       <span>•</span>
  //       <span>1 month</span>
  //     </ProjectMeta>
  //
  //     <ProjectSection>
  //       <SectionTitle>Description</SectionTitle>
  //       <p>
  //         I developed a design system for a hypothetical mobile app. The system is built with React
  //         and TypeScript and includes components like buttons, input fields, and modals.
  //       </p>
  //     </ProjectSection>
  //
  //     <ProjectSection>
  //       <SectionTitle>Technologies</SectionTitle>
  //       <TechStack>
  //         <TechTag>React</TechTag>
  //         <TechTag>TypeScript</TechTag>
  //         <TechTag>Storybook</TechTag>
  //         <TechTag>TailwindCSS</TechTag>
  //         <TechTag>Figma</TechTag>
  //         <TechTag>Jest</TechTag>
  //         <TechTag>React Testing Library</TechTag>
  //         <TechTag>Git</TechTag>
  //       </TechStack>
  //     </ProjectSection>
  //
  //     <ProjectSection>
  //       <SectionTitle>Role</SectionTitle>
  //       <Role>
  //         <span>🔧 Front-end Developer</span>
  //       </Role>
  //     </ProjectSection>
  //
  //     <ProjectSection>
  //       <SectionTitle>Design System</SectionTitle>
  //       <p>
  //         The design system includes a set of reusable components such as buttons, inputs, and
  //         modals. I used Storybook to document these components and TailwindCSS to style them. The
  //         system is built with React and TypeScript, and I wrote unit tests for the components using
  //         Jest and React Testing Library.
  //       </p>
  //     </ProjectSection>
  //
  //     <ProjectSection>
  //       <SectionTitle>Demo</SectionTitle>
  //       <DemoImage
  //         src={process.env.PUBLIC_URL + '/images/ProjectContentsSample.png'}
  //         alt="Project Demo"
  //       />
  //     </ProjectSection>
  //
  //     <ProjectSection>
  //       <SectionTitle>Next Steps</SectionTitle>
  //       <p>
  //         In the future, I'd like to expand the design system to include more complex components,
  //         such as data tables and charts. I also want to add accessibility features to ensure that
  //         the components are usable by a wide range of users.
  //       </p>
  //     </ProjectSection>
  //   </Container>
  // );
};

export default ProjectDetail;
