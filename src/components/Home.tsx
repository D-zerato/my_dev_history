import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SkillsSection } from './SkillSection';
import SocialButton from './SocialButton';
import ProjectsSection from './ProjectsSection';
import IntroSection from './IntroSection';
import { useParams } from 'react-router-dom';
import { useFindEvent } from '../home/home.event';
import { useAtom } from 'jotai';
import { projectQdoAtom, userAtom } from '../home/home.atom';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

interface ContainerProps {
  $backgroundImage: string;
}

const HeroImage = styled.div<ContainerProps>`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: -60px auto 1rem;
  display: block;
  border: 4px solid white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const TopSection = styled.section`
  padding: 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;
`;

const BottomSection = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
`;

export const Home: React.FC = () => {
  //
  const params = useParams();
  const [user, setUser] = useAtom(userAtom);
  const [qdo, setQdo] = useAtom(projectQdoAtom);
  const { data: userData, isLoading } = useFindEvent(params?.id || '');

  useEffect(() => {
    //
    if (userData && !isLoading) {
      setUser(userData);
    }
  }, [userData, isLoading]);

  useEffect(() => {
    //
    if (params?.id !== '' && params?.id !== undefined) {
      setQdo({ ...qdo, userId: params?.id });
    }
  }, [params]);

  return (
    <HomeContainer>
      <TopSection>
        <HeroImage $backgroundImage={process.env.PUBLIC_URL + '/images/TopBannerSample.jpg'} />
        <ProfileSection>
          <ProfileImage
            src={process.env.PUBLIC_URL + '/images/profileSample.png'}
            alt="Alex Martin"
          />
          <Title>{user?.name || 'Alex Martin'}</Title>
          <Subtitle>{user?.description || 'Front - end developer, designer, and maker.'}</Subtitle>
          <SocialButtons>
            <SocialButton href="https://github.com">GitHub</SocialButton>
            <SocialButton $primary href="https://linkedin.com">
              LinkedIn
            </SocialButton>
          </SocialButtons>
        </ProfileSection>
        <IntroSection />
      </TopSection>

      <BottomSection>
        <SkillsSection />
        <ProjectsSection />
      </BottomSection>
    </HomeContainer>
  );
};
