import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transRecordSlice';
import TransactionList from '../../components/body/TransactionList';

const TransRecord = () => {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className="comments-container">
      <TransactionList transactions={transactions} />
      
    </div>
  );
};

export default TransRecord;
