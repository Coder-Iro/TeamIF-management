import styled from 'styled-components';
import React, { useState } from 'react';
import {
  IoBuild,
  IoLogOutOutline,
  IoMdPeople,
  IoPersonCircle
} from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import SideBarItem from './SideBarItem';
import SCREEN_SIZE from '../../styles/ScreenSize';
import SideBarHeader from './SideBarHeader';

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

const ItemList = styled.div<{ isOpen: boolean }>`
  display: block;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

const MenuText = styled.span`
  margin-left: 4px;
`;

const StyledLink = styled(NavLink).attrs({
  activeClassName: 'nav-item-active'
})`
  &.nav-item-active {
    & > div {
      background-color: #262626;
      font-weight: 700;
      border-right: solid 5px #ffffff;
    }
  }
`;

const SideBar: React.FC = () => {
  const state = useState<boolean>(false);
  const [isOpen] = state;

  return (
    <StyledSideBar>
      <SideBarHeader state={state} />

      <ItemList isOpen={isOpen}>
        <StyledLink to='/team'>
          <SideBarItem>
            <IoMdPeople size={22} />
            <MenuText>팀원 관리</MenuText>
          </SideBarItem>
        </StyledLink>

        <StyledLink to='/project'>
          <SideBarItem>
            <IoBuild size={22} />
            <MenuText>프로젝트 관리</MenuText>
          </SideBarItem>
        </StyledLink>

        <StyledLink to='/account'>
          <SideBarItem>
            <IoPersonCircle size={22} />
            <MenuText>계정 관리</MenuText>
          </SideBarItem>
        </StyledLink>

        <SideBarItem>
          <IoLogOutOutline size={22} />
          <MenuText>로그아웃</MenuText>
        </SideBarItem>
      </ItemList>
    </StyledSideBar>
  );
};

export default SideBar;
