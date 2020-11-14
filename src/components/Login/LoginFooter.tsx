import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 250px;
  height: 36px;

  border: none;
  border-radius: 3px;

  color: white;
  background-color: #0048d9;

  margin-top: 1rem;

  cursor: pointer;
`;

interface LoginFooterProps {
  readonly onLoginClick?: React.MouseEventHandler;
}

const LoginFooter: React.FC<LoginFooterProps> = ({ onLoginClick }) => {
  return <Button onClick={onLoginClick}>로그인</Button>;
};

export default LoginFooter;
