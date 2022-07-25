import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 1080px;
  background-color: #fff;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  border-spacing: 0;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const TableHead = styled.thead`
  background-color: #02bcd6;
  color: #fff;
`;

export const TableHeadRow = styled.tr`
`;

export const TableHeadCell = styled.th`
  padding: 25px 15px;
  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TableBody = styled.tbody`
  color: #9d9d9d;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const TableBodyCell = styled.td`
  padding: 25px 15px;
  &:not(:last-child) {
    border-right: 1px solid #eaeaea;
  }
`;