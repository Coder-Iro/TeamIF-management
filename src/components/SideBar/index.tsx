import styled from 'styled-components';
import React from 'react';
import SideBarItem from './SideBarItem';

const StyledSideBar = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #333333;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.8);

  color: white;
`;

const PageTitle = styled.h1`
  font-size: 26px;
  color: white;
  text-align: center;

  margin: 3rem 0;
`;

const SideBar: React.FC = () => {
  return (
    <StyledSideBar>
      <PageTitle>
        TeamIF
        <br />
        Management
      </PageTitle>
      <SideBarItem>팀원 관리</SideBarItem>
      <SideBarItem>팀원 모집</SideBarItem>
      <SideBarItem>프로젝트 관리</SideBarItem>
      <SideBarItem>로그아웃</SideBarItem>
      {/* TODO: 사이드바에 들어갈 메뉴 추가하기 */}
    </StyledSideBar>
  );
};

export default SideBar;
