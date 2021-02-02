import styled from 'styled-components';

const TableItem = styled.tr`
  text-align: center;
  font-size: 15px;

  & > * {
    padding: 0.8rem 0.5rem;
  }

  border-bottom: 1px solid #d7dfe3;

  &:last-child {
    border-bottom: none;
  }
`;

export default TableItem;
