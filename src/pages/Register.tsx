import React from 'react';
import styled from 'styled-components';
import Input from '../atomics/Input';
import InputWidthButton from '../atomics/Button/InputWidthButton';

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
  return (
    <Container>
      <div>
        <h2 style={{ textAlign: 'center' }}>가입코드 입력</h2>
        <InputContainer>
          <StyledInput type='text' placeholder='가입코드를 입력해주세요.' />
        </InputContainer>
        <InputWidthButton>다음으로</InputWidthButton>
        <br />
        <InputWidthButton>뒤로가기</InputWidthButton>
      </div>
    </Container>
  );
};

export default Register;
