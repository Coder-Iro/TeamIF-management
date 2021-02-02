import React from 'react';
import { Heading1 } from '../atomics/Typography/Heading';
import SideBarLayout from '../layouts/SideBarLayout';

const ProjectPage: React.FC = () => {
  return (
    <SideBarLayout>
      <Heading1>프로젝트 관리</Heading1>
      <br />
    </SideBarLayout>
  );
};

export default ProjectPage;
