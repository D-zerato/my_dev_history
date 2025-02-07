import React from 'react';
import styled from 'styled-components';
import { ProjectDetail } from '../model/ProjectDetail';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TechTag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{project.name}</h2>
        <ProjectImage src={project.thumbnailUrl} alt={project.name} />

        <TechStack>
          {project.techs.map((tech, index) => (
            <TechTag key={index}>{tech.name}</TechTag>
          ))}
        </TechStack>

        <p>{project.description}</p>

        {/*<Section>*/}
        {/*  <h3>Work Details</h3>*/}
        {/*  {project.workDetails.tasks.map((task, index) => (*/}
        {/*    <div key={index}>*/}
        {/*      <h4>{task.title}</h4>*/}
        {/*      <p>{task.description}</p>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</Section>*/}

        {/*<Section>*/}
        {/*  <h3>Achievements</h3>*/}
        {/*  {project.achievements.map((achievement, index) => (*/}
        {/*    <div key={index}>*/}
        {/*      <h4>{achievement.title}</h4>*/}
        {/*      <p>{achievement.description}</p>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</Section>*/}

        {/*<Section>*/}
        {/*  <h3>Issues & Solutions</h3>*/}
        {/*  {project.issues.map((issue, index) => (*/}
        {/*    <div key={index}>*/}
        {/*      <h4>Problem {index + 1}</h4>*/}
        {/*      <p>{issue.problem}</p>*/}
        {/*      <h4>Solution</h4>*/}
        {/*      <p>{issue.solution}</p>*/}
        {/*      <h4>Review</h4>*/}
        {/*      <p>{issue.review}</p>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</Section>*/}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
