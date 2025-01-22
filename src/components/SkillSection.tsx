import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  margin: 2rem 0;
`;

const SkillTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const SkillRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

const SkillCategory = styled.td`
  padding: 1rem;
  font-weight: bold;
  width: 200px;
`;

const SkillItems = styled.td`
  padding: 1rem;
  color: #666;
`;

export const SkillsSection: React.FC = () => {
  const skills: any[] = [
    { category: 'Backend', items: ['Java', 'Spring', 'Redis'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Database', items: ['SQL', 'NoSQL', 'MongoDB'] },
  ];

  return (
    <SkillsContainer>
      <SkillTable>
        <tbody>
          {skills.map((skill, index) => (
            <SkillRow key={index}>
              <SkillCategory>{skill.category}</SkillCategory>
              <SkillItems>{skill.items.join(', ')}</SkillItems>
            </SkillRow>
          ))}
        </tbody>
      </SkillTable>
    </SkillsContainer>
  );
};
