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
  display: flex;
  justify-content: center;

  & input {
    display: block;
    margin-bottom: 20px;
  }

  & input:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`;

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

const Login: React.FC = () => {
  return (
    <Container>
      <div>
        <Title id='Login__title'>TeamIF Management</Title>
        <InputContainer>
          <div>
            <Label htmlFor='id'>아이디</Label>
            <Input type='text' id='id' placeholder='' />

            <Label htmlFor='password'>비밀번호</Label>
            <Input type='password' id='password' placeholder='' />

            <div>
              <Button>로그인</Button>
              <br />
              <Button>회원가입</Button>
            </div>
          </div>
        </InputContainer>
      </div>
    </Container>
  );
};

export default Login;
