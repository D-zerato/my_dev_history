import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { ProjectDetail } from '../model/ProjectDetail';

interface ProjectCardProps {
  project: ProjectDetail;
}

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsModalOpen(true)}>
        <ProjectImage src={project.image} alt={project.title} />
        <ProjectInfo>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectInfo>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={project} />
    </>
  );
};

export default ProjectCard;
