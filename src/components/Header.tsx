import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.background};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>MyDevHistory</Logo>
      <Nav>
        {/*<NavLink href="#home">Home</NavLink>*/}
        {/*<NavLink href="#about">About</NavLink>*/}
        {/*<NavLink href="#experience">Experience</NavLink>*/}
        {/*<NavLink href="#skills">Skills</NavLink>*/}
        {/*<NavLink href="#projects">Projects</NavLink>*/}
        {/*<NavLink href="#contact">Contact</NavLink>*/}
      </Nav>
      <Controls>
        <ProfileImage src={process.env.PUBLIC_URL + '/images/profileSample.png'} alt="Profile" />
      </Controls>
    </HeaderContainer>
  );
};
