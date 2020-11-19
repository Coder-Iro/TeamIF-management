import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Label from '../atomics/Label';
import Input from '../atomics/Input';
import LoginHeader from '../components/Login/LoginHeader';
import LoginFooter from '../components/Login/LoginFooter';
import Api from '../api';
import TokenUtil from '../api/TokenUtil';

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

  const onLoginClick = () => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (korean.test(input.id) || korean.test(input.password)) {
      toast.warn('아이디 또는 비밀번호 형식이 올바르지 않습니다.');
      return;
    }

    if (input.id.trim() === '' || input.password.trim() === '') {
      toast.warn('아이디 또는 비밀번호가 빈 칸입니다.');
      return;
    }

    Api.put('/member/', null, {
      headers: {
        Authorization: `Basic ${btoa(`${input.id}:${input.password}`)}`
      }
    })
      .then(() => {
        TokenUtil.set(btoa(`${input.id}:${input.password}`));
        toast('환영합니다.');
      })
      .catch((e) => {
        if (e.response && e.response.status === 401) {
          toast.error('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
      });
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

            <LoginFooter onLoginClick={onLoginClick} />
          </div>
        </InputContainer>
      </div>
    </Container>
  );
};

export default Login;
