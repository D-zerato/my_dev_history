import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: #e0e0e0;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: -1rem;
  width: 2rem;
  height: 2rem;
  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  color: #666;
`;

export const Timeline: React.FC = () => {
  const items: any[] = [
    { icon: '🌱', title: 'Started the journey', subtitle: 'Beginner' },
    { icon: '💻', title: 'First project', subtitle: 'Learning HTML/CSS' },
    { icon: '⚡', title: 'Skills acquired', subtitle: 'JavaScript, React' },
    { icon: '🚀', title: 'First job', subtitle: 'Junior Developer' },
    { icon: '✨', title: 'Present day', subtitle: 'Experienced Developer' },
  ];

  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineIcon>{item.icon}</TimelineIcon>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};
