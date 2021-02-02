import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;

  border-radius: 15px;
`;

const Table: React.FC = ({ children }) => {
  return (
    <TableContainer>
      <StyledTable>{children}</StyledTable>
    </TableContainer>
  );
};

export default Table;
