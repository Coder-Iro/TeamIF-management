import styled from 'styled-components';
import React, { Dispatch, SetStateAction } from 'react';
import { IoMenu } from 'react-icons/all';
import SCREEN_SIZE from '../../styles/ScreenSize';

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

const PCNewLine = styled.br`
  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: none;
  }
`;

interface SideBarHeaderProps {
  readonly state: [boolean, Dispatch<SetStateAction<boolean>>];
}

const SideBarHeader: React.FC<SideBarHeaderProps> = ({ state }) => {
  const [, setOpen] = state;

  return (
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
  );
};

export default SideBarHeader;
