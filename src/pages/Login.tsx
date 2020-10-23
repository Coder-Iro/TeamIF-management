import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Login: React.FC = () => {
  return (
    <Container>
      <h2>Login Page</h2>
    </Container>
  );
};

export default Login;
