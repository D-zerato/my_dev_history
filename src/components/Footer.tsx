import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 4rem;
  gap: 1rem;
`;

const Email = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  color: #999;
  font-size: 0.8rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Email>alexmartin@gmail.com</Email>
      <Copyright>Copyright 2023 Alex Martin. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
