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

const LoginFooter: React.FC = () => {
  return <Button>로그인</Button>;
};

export default LoginFooter;
