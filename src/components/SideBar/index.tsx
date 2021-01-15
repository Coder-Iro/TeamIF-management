import styled from 'styled-components';
import React from 'react';
import {
  IoBuild,
  IoCheckmarkDoneSharp,
  IoLogOutOutline,
  IoMdPeople
} from 'react-icons/all';
import { NavLink } from 'react-router-dom';
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

const MenuText = styled.span`
  margin-left: 4px;
`;

const activeStyle = {
  backgroundColor: '#262626'
};

const SideBar: React.FC = () => {
  return (
    <StyledSideBar>
      <PageTitle>
        TeamIF
        <br />
        Management
      </PageTitle>

      <NavLink to='/team/manage' activeStyle={activeStyle}>
        <SideBarItem>
          <IoMdPeople size={22} />
          <MenuText>팀원 관리</MenuText>
        </SideBarItem>
      </NavLink>

      <NavLink to='/team/recruit' activeStyle={activeStyle}>
        <SideBarItem>
          <IoCheckmarkDoneSharp size={22} />
          <MenuText>팀원 모집</MenuText>
        </SideBarItem>
      </NavLink>

      <NavLink to='/project' activeStyle={activeStyle}>
        <SideBarItem>
          <IoBuild size={22} />
          <MenuText>프로젝트 관리</MenuText>
        </SideBarItem>
      </NavLink>

      <SideBarItem>
        <IoLogOutOutline size={22} />
        <MenuText>로그아웃</MenuText>
      </SideBarItem>

      {/* TODO: 사이드바에 들어갈 메뉴 추가하기 */}
    </StyledSideBar>
  );
};

export default SideBar;
