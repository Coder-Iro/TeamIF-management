import React from 'react';
import styled from 'styled-components';
import Label from '../atomics/Label';
import Input from '../atomics/Input';

const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  & input {
    display: block;
    margin-bottom: 20px;
  }

  & input:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginButton = styled.button`
  width: 250px;
  height: 36px;

  border: none;
  border-radius: 3px;

  color: white;
  background-color: #0048d9;

  margin-top: 1rem;

  cursor: pointer;
`;

const Login: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>TeamIF</Title>
        <InputContainer>
          <Label htmlFor='id'>아이디</Label>
          <Input type='text' id='id' placeholder='' />

          <Label htmlFor='password'>비밀번호</Label>
          <Input type='password' id='password' placeholder='' />

          <LoginButton>로그인</LoginButton>
        </InputContainer>
      </div>
    </Container>
  );
};

export default Login;
