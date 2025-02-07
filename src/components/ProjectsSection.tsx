import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { useAtom, useAtomValue } from 'jotai';
import { projectQdoAtom, projectsAtom } from '../home/home.atom';
import { ProjectDetail } from '../model/ProjectDetail';
import { useFindProjects } from '../home/home.event';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectsSection: React.FC = () => {
  //
  const qdo = useAtomValue(projectQdoAtom);
  const [projects, setProjects] = useAtom(projectsAtom);
  const { data: projectListResult, isLoading } = useFindProjects(qdo);

  useEffect(() => {
    //
    if (projectListResult && !isLoading) {
      setProjects(projectListResult.content);
    }
  }, [projectListResult, isLoading]);

  return (
    <ProjectsGrid>
      {projects?.map((project: ProjectDetail, index: any) => <ProjectCard project={project} />)}
    </ProjectsGrid>
  );
};

export default ProjectsSection;

// const projects: ProjectDetail[] = [
//   {
//     title: 'Habitual',
//     description: 'A habit tracker for your personal growth journey.',
//     image: process.env.PUBLIC_URL + '/images/app sample 1.png',
//     techStack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
//     workDetails: {
//       tasks: [
//         { title: 'Task 1', description: 'Task 1 description' },
//         { title: 'Task 2', description: 'Task 2 description' },
//         { title: 'Task 3', description: 'Task 3 description' },
//       ],
//     },
//     achievements: [
//       { title: 'Achievement 1', description: 'Achievement 1 description' },
//       { title: 'Achievement 2', description: 'Achievement 2 description' },
//       { title: 'Achievement 3', description: 'Achievement 3 description' },
//     ],
//     issues: [
//       {
//         problem: 'Problem 1 description',
//         solution: 'Solution 1 description',
//         review: 'Review 1 description',
//       },
//       {
//         problem: 'Problem 2 description',
//         solution: 'Solution 2 description',
//         review: 'Review 2 description',
//       },
//     ],
//   },
//   {
//     title: 'Habitual',
//     description: 'A habit tracker for your personal growth journey.',
//     image: process.env.PUBLIC_URL + '/images/app sample 2.png',
//     techStack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
//     workDetails: {
//       tasks: [
//         { title: 'Task 1', description: 'Task 1 description' },
//         { title: 'Task 2', description: 'Task 2 description' },
//         { title: 'Task 3', description: 'Task 3 description' },
//       ],
//     },
//     achievements: [
//       { title: 'Achievement 1', description: 'Achievement 1 description' },
//       { title: 'Achievement 2', description: 'Achievement 2 description' },
//       { title: 'Achievement 3', description: 'Achievement 3 description' },
//     ],
//     issues: [
//       {
//         problem: 'Problem 1 description',
//         solution: 'Solution 1 description',
//         review: 'Review 1 description',
//       },
//       {
//         problem: 'Problem 2 description',
//         solution: 'Solution 2 description',
//         review: 'Review 2 description',
//       },
//     ],
//   },
//   {
//     title: 'Habitual',
//     description: 'A habit tracker for your personal growth journey.',
//     image: process.env.PUBLIC_URL + '/images/web sample 1.png',
//     techStack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
//     workDetails: {
//       tasks: [
//         { title: 'Task 1', description: 'Task 1 description' },
//         { title: 'Task 2', description: 'Task 2 description' },
//         { title: 'Task 3', description: 'Task 3 description' },
//       ],
//     },
//     achievements: [
//       { title: 'Achievement 1', description: 'Achievement 1 description' },
//       { title: 'Achievement 2', description: 'Achievement 2 description' },
//       { title: 'Achievement 3', description: 'Achievement 3 description' },
//     ],
//     issues: [
//       {
//         problem: 'Problem 1 description',
//         solution: 'Solution 1 description',
//         review: 'Review 1 description',
//       },
//       {
//         problem: 'Problem 2 description',
//         solution: 'Solution 2 description',
//         review: 'Review 2 description',
//       },
//     ],
//   },
//   {
//     title: 'Habitual',
//     description: 'A habit tracker for your personal growth journey.',
//     image: process.env.PUBLIC_URL + '/images/web sample 2.png',
//     techStack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
//     workDetails: {
//       tasks: [
//         { title: 'Task 1', description: 'Task 1 description' },
//         { title: 'Task 2', description: 'Task 2 description' },
//         { title: 'Task 3', description: 'Task 3 description' },
//       ],
//     },
//     achievements: [
//       { title: 'Achievement 1', description: 'Achievement 1 description' },
//       { title: 'Achievement 2', description: 'Achievement 2 description' },
//       { title: 'Achievement 3', description: 'Achievement 3 description' },
//     ],
//     issues: [
//       {
//         problem: 'Problem 1 description',
//         solution: 'Solution 1 description',
//         review: 'Review 1 description',
//       },
//       {
//         problem: 'Problem 2 description',
//         solution: 'Solution 2 description',
//         review: 'Review 2 description',
//       },
//     ],
//   },
//   // ... 다른 프로젝트들
// ];
