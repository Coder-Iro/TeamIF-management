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
import TokenUtil from '../../api/TokenUtil';

const StyledSideBar = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #182c61;

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
      background-color: #0f1c3d;
      font-weight: 700;
      border-right: 5px solid #ffffff;
    }
  }
`;

const SideBar: React.FC = () => {
  const state = useState<boolean>(false);
  const [isOpen] = state;

  const onLogoutClick = () => {
    // eslint-disable-next-line no-restricted-globals,no-alert
    const isLogout = confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      TokenUtil.remove();
      window.location.reload();
    }
  };

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

        <SideBarItem onClick={onLogoutClick} tabIndex={0}>
          <IoLogOutOutline size={22} />
          <MenuText>로그아웃</MenuText>
        </SideBarItem>
      </ItemList>
    </StyledSideBar>
  );
};

export default SideBar;
