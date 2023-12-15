import React from 'react';
import Transaction from './Transaction';
import { useSelector } from 'react-redux';
import { selectDeviceType, selectDropdownStatus} from '../../features/newTransaction/newTransactionSlice';

const TransactionList = ({ transactions }) => {
  const deviceType = useSelector(selectDeviceType);
  const dropdownStatus = useSelector(selectDropdownStatus);

  return (
    <section className={`transaction-record-section ${deviceType}-${dropdownStatus}`}>
      <h2>Transactions</h2>
      <ul className="transaction-list">
        {transactions.map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;
