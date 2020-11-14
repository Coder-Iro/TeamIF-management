import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../atomics/Label';
import Input from '../atomics/Input';
import LoginHeader from '../components/Login/LoginHeader';
import LoginFooter from '../components/Login/LoginFooter';

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

interface InputState {
  readonly id: string;
  readonly password: string;
}

const Login: React.FC = () => {
  const [input, setInput] = useState<InputState>({
    id: '',
    password: ''
  });

  const onInputChange = (type: keyof InputState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  return (
    <Container>
      <div>
        <LoginHeader />
        <InputContainer>
          <div>
            <Label htmlFor='id'>아이디</Label>
            <Input
              type='text'
              id='id'
              value={input.id}
              placeholder='아이디를 입력해주세요.'
              onChange={onInputChange('id')}
            />

            <Label htmlFor='password'>비밀번호</Label>
            <Input
              type='password'
              id='password'
              value={input.password}
              placeholder='비밀번호를 입력해주세요.'
              onChange={onInputChange('password')}
            />

            <LoginFooter />
          </div>
        </InputContainer>
      </div>
    </Container>
  );
};

export default Login;
