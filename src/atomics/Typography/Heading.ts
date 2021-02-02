import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/ScreenSize';

export const Heading1 = styled.h1`
  font-size: 32px;
  font-weight: bold;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 28px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: bold;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 24px;
  }
`;

export const Heading3 = styled.h3`
  font-size: 22px;
  font-weight: normal;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 20px;
  }
`;
