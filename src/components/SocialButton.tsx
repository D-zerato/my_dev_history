import styled from 'styled-components';

interface SocialButtonProps {
  $primary?: boolean;
}

export const SocialButton = styled.a<SocialButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$primary ? '#0095f6' : '#f0f0f0')};
  color: ${(props) => (props.$primary ? '#ffffff' : '#333333')};
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) => (props.$primary ? '#0086e0' : '#e4e4e4')};
  }

  &:active {
    transform: translateY(0);
  }
`;

export default SocialButton;
