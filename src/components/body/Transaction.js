import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../features/transRecord/transRecordSlice';

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTransaction(transaction));
  };

  return (
    <li className="transaction-record">
      <span>
        {transaction.amount} – {transaction.category}{' '}
        <span className="description">( {transaction.description} )</span>
      </span>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
}

export default Transaction;
