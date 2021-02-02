import React from 'react';
import { Heading1 } from '../atomics/Typography/Heading';
import SideBarLayout from '../layouts/SideBarLayout';

const AccountPage: React.FC = () => {
  return (
    <SideBarLayout>
      <Heading1>계정 관리</Heading1>
      <br />
    </SideBarLayout>
  );
};

export default AccountPage;
