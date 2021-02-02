import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading1 } from '../atomics/Typography/Heading';
import SideBarLayout from '../layouts/SideBarLayout';
import SCREEN_SIZE from '../styles/ScreenSize';
import Table from '../components/Table';
import TableHeader from '../components/Table/TableHeader';
import TableItem from '../components/Table/TableItem';
import { ProfileType } from '../types/Payload';
import Api from '../api';

const JobTag = styled.span`
  display: inline-block;

  width: 60px;
  height: 20px;

  line-height: 20px;

  border-radius: 50px;

  background-color: #ced6e0;
  font-size: 12px;

  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    margin-right: 0;

    display: block;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MainPage: React.FC = () => {
  const [members, setMembers] = useState<ProfileType[]>([]);

  useEffect(() => {
    Api.get('/members/').then((res) => setMembers(res.data));
  }, []);

  return (
    <SideBarLayout>
      <Heading1>팀원 관리</Heading1>
      <br />

      <Table>
        <thead>
          <TableHeader>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>JOBS</th>
            <th>LEVEL</th>
          </TableHeader>
        </thead>
        <tbody>
          {members.length !== 0 ? (
            members.map((v) => (
              <TableItem key={v.id}>
                <td>{v.id}</td>
                <td>{v.nickname}</td>
                <td>{v.email}</td>
                <td>
                  {v.jobs.map((job, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <JobTag key={idx}>{job}</JobTag>
                  ))}
                </td>
                <td>{v.level}</td>
              </TableItem>
            ))
          ) : (
            <TableItem>
              <td>데이터를 불러오는 중...</td>
            </TableItem>
          )}
        </tbody>
      </Table>
    </SideBarLayout>
  );
};

export default MainPage;
