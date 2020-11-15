import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Input from '../atomics/Input';
import InputWidthButton from '../atomics/Button/InputWidthButton';
import Api from '../api';
import RegisterDetail from './RegisterDetail';
import { CodeType } from '../types/CodeType';

const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 1rem;
`;

const StyledInput = styled(Input)`
  height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
`;

const Register: React.FC = () => {
  const history = useHistory();
  const [code, setCode] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const onNextClick = () => {
    if (code.trim() === '') {
      toast.warn('가입코드가 빈 칸입니다.');
      return;
    }

    Api.get('/check', {
      params: {
        code
      }
    })
      .then((res) => {
        const codeInfo: CodeType = res.data;
        swal({
          title: '회원가입 진행',
          text: `${codeInfo.username}님으로 회원가입을 진행하시겠습니까?`,
          icon: 'success',
          buttons: ['취소', '확인']
        }).then((confirm) => {
          if (!confirm) return;
          setSuccess(true);
        });
      })
      .catch(() => {
        toast.error('가입코드가 올바르지 않습니다.');
      });
  };

  if (success) {
    return <RegisterDetail code={code} />;
  }

  return (
    <Container>
      <div>
        <h2 style={{ textAlign: 'center' }}>가입코드 입력</h2>
        <InputContainer>
          <StyledInput
            type='text'
            placeholder='가입코드를 입력해주세요.'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </InputContainer>
        <InputWidthButton onClick={onNextClick}>다음으로</InputWidthButton>
        <br />
        <InputWidthButton onClick={() => history.goBack()}>
          뒤로가기
        </InputWidthButton>
      </div>
    </Container>
  );
};

export default Register;
