import React from 'react';
import InputWidthButton from '../../atomics/Button/InputWidthButton';

interface LoginFooterProps {
  readonly onLoginClick?: React.MouseEventHandler;
}

const LoginFooter: React.FC<LoginFooterProps> = ({ onLoginClick }) => {
  return <InputWidthButton onClick={onLoginClick}>로그인</InputWidthButton>;
};

export default LoginFooter;
