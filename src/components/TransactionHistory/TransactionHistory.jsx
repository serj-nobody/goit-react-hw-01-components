import PropTypes from 'prop-types';
import { TransactionsTable, TableHead, TableHeadRow, TableHeadCell, TableBody, TableRow, TableBodyCell } from './TransactionHistory.styled';


export const TransactionHistory = ({items}) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TableHeadRow >
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableBodyCell>{type}</TableBodyCell>
            <TableBodyCell>{amount}</TableBodyCell>
            <TableBodyCell>{currency}</TableBodyCell>
        </TableRow>
        ))}
      </TableBody>
    </TransactionsTable>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};