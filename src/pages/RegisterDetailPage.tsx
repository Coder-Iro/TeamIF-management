import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Label from '../atomics/Label';
import Input from '../atomics/Input';
import InputWidthButton from '../atomics/Button/InputWidthButton';
import Api from '../api';

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

  margin-bottom: 10px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
`;

interface RegisterDetailProps {
  readonly code: string;
  readonly nickname: string;
  readonly rrole: string;
}

interface InputState {
  readonly id: string;
  readonly password: string;
  readonly passwordConfirm: string;
  readonly email: string;
  readonly github: string;
}

const RegisterDetailPage: React.FC<RegisterDetailProps> = ({
  code,
  nickname,
  rrole
}) => {
  const [input, setInput] = useState<InputState>({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    github: ''
  });
  const history = useHistory();

  if (!code.trim()) {
    return (
      <Container>
        <div>
          <h1>잘못된 접근입니다.</h1>
        </div>
      </Container>
    );
  }

  const checkEmail = (email: string): boolean => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(email);
  };

  const checkGitHub = (github: string): Promise<boolean> => {
    const host = 'https://api.github.com/users/';
    const result = Axios.head(`${host}${github}`)
      .then(() => {
        return true;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          return false;
        }
        return false;
      });
    return result;
  };

  const onInputChange = (type: keyof InputState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  const onEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') return;

    if (checkEmail(e.target.value)) {
      return;
    }

    toast.warn('올바르지 않은 이메일입니다.');
  };

  const onGitHubBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === '') return;

    const result = await checkGitHub(event.target.value);
    if (result) {
      return;
    }

    toast.warn('존재하지 않는 GitHub 사용자입니다.');
  };

  const onRegisterClick = async () => {
    const blankCount = Object.values(input).filter(
      (inputValue) => inputValue.trim() === '' || inputValue === '0'
    );
    if (blankCount.length > 0) {
      toast.warn('빈 칸이 있습니다.');
      return;
    }
    const result = await checkGitHub(input.github);
    if (!checkEmail(input.email) || !result) {
      toast.warn('이메일 또는 GitHub 아이디를 다시 확인해주세요.');
      return;
    }
    if (input.password !== input.passwordConfirm) {
      toast.warn('비밀번호를 다시 확인해주세요.');
      return;
    }

    Api.post('/member/', {
      code,
      id: input.id,
      password: input.password,
      github: input.github,
      email: input.email
    }).then(() => {
      toast('회원가입 성공! 로그인 후 이용해주세요.');
      history.push('/login');
    });
  };

  return (
    <Container>
      <div>
        <Title>
          TeamIF Management
          <br />
          회원가입
        </Title>
        <InputContainer>
          <div>
            <Label htmlFor='nickname'>닉네임</Label>
            <Input
              type='text'
              id='nickname'
              value={nickname}
              readOnly
              disabled
            />
            <Label htmlFor='role'>역할</Label>
            <Input type='text' id='role' value={rrole} readOnly disabled />

            <Label htmlFor='id'>아이디</Label>
            <Input
              type='text'
              id='id'
              placeholder='로그인 및 팀 이메일에 사용할 아이디'
              value={input.id}
              onChange={onInputChange('id')}
            />

            <Label htmlFor='password'>비밀번호</Label>
            <Input
              type='password'
              id='password'
              placeholder='비밀번호'
              value={input.password}
              onChange={onInputChange('password')}
            />

            <Label htmlFor='passwordConfirm'>비밀번호 확인</Label>
            <Input
              type='password'
              id='passwordConfirm'
              placeholder='비밀번호 확인'
              value={input.passwordConfirm}
              onChange={onInputChange('passwordConfirm')}
            />

            <Label htmlFor='email'>이메일</Label>
            <Input
              type='email'
              id='email'
              placeholder='팀 이메일과 연결할 이메일'
              onBlur={onEmailBlur}
              value={input.email}
              onChange={onInputChange('email')}
            />

            <Label htmlFor='github'>GitHub</Label>
            <Input
              type='text'
              id='github'
              placeholder='GitHub 아이디'
              onBlur={onGitHubBlur}
              value={input.github}
              onChange={onInputChange('github')}
            />
          </div>
        </InputContainer>
        <InputWidthButton onClick={onRegisterClick}>회원가입</InputWidthButton>
      </div>
    </Container>
  );
};

export default RegisterDetailPage;
