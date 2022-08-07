import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transactionsSlice';
import NewTransaction from '../../components/NewTransaction';
import TransactionList from '../../components/TransactionList';

const Transactions = () => {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className="comments-container">
      <TransactionList transactions={transactions} />
      <NewTransaction />
    </div>
  );
};

export default Transactions;
