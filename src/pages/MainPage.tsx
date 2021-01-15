import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
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
