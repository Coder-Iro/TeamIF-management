import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import SCREEN_SIZE from '../styles/ScreenSize';

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: flex;
    flex-direction: column;
  }
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <div>
        <p>테스트</p>
      </div>
    </Container>
  );
};

export default MainPage;
