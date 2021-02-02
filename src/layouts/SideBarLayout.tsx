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

const ContentBody = styled.div`
  margin: 2.5rem 2rem;
`;

const SideBarLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <ContentBody>{children}</ContentBody>
    </Container>
  );
};

export default SideBarLayout;
