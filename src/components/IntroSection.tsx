import React from 'react';
import styled from 'styled-components';
import { Timeline } from './Timeline';

const IntroContainer = styled.section`
  margin: 4rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
`;

const TimelineContainer = styled.div`
  margin-top: 3rem;
`;

const IntroSection: React.FC = () => {
  return (
    <IntroContainer>
      <Title>Hi, I'm Alex</Title>
      <Subtitle>Front-end developer, designer, and maker.</Subtitle>
      <TimelineContainer>
        <Timeline />
      </TimelineContainer>
    </IntroContainer>
  );
};

export default IntroSection;
