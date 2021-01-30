import styled from 'styled-components';
import React, { useState } from 'react';
import {
  IoBuild,
  IoLogOutOutline,
  IoMdPeople,
  IoMenu,
  IoPersonCircle
} from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import SideBarItem from './SideBarItem';
import SCREEN_SIZE from '../../styles/ScreenSize';

const StyledSideBar = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #333333;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.8);

  color: white;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    min-height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem 0;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    flex-direction: row;
    justify-content: space-between;

    margin: 1rem 0 1rem 1rem;
  }
`;

const StyledMenuIcon = styled(IoMenu)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: block;
    margin-right: 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 26px;
  color: white;
  text-align: center;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    font-size: 22px;
    text-align: left;
  }
`;

const ItemList = styled.div<{ isOpen: boolean }>`
  display: block;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

const PCNewLine = styled.br`
  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: none;
  }
`;

const MenuText = styled.span`
  margin-left: 4px;
`;

const activeStyle = {
  backgroundColor: '#262626'
};

const SideBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <StyledSideBar>
      <Header>
        <PageTitle>
          TeamIF <PCNewLine />
          Management
        </PageTitle>
        <StyledMenuIcon
          onClick={() => setOpen((current) => !current)}
          size={24}
        />
      </Header>

      <ItemList isOpen={isOpen}>
        <NavLink to='/team' activeStyle={activeStyle}>
          <SideBarItem>
            <IoMdPeople size={22} />
            <MenuText>팀원 관리</MenuText>
          </SideBarItem>
        </NavLink>

        <NavLink to='/project' activeStyle={activeStyle}>
          <SideBarItem>
            <IoBuild size={22} />
            <MenuText>프로젝트 관리</MenuText>
          </SideBarItem>
        </NavLink>

        <NavLink to='/account' activeStyle={activeStyle}>
          <SideBarItem>
            <IoPersonCircle size={22} />
            <MenuText>계정 관리</MenuText>
          </SideBarItem>
        </NavLink>

        <SideBarItem>
          <IoLogOutOutline size={22} />
          <MenuText>로그아웃</MenuText>
        </SideBarItem>
      </ItemList>
    </StyledSideBar>
  );
};

export default SideBar;
