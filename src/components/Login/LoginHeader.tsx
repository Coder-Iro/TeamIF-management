import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginHeader: React.FC = () => {
  return <Title id='Login__title'>TeamIF Management</Title>;
};

export default LoginHeader;
