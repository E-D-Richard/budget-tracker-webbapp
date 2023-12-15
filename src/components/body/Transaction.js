import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../features/transRecord/transRecordSlice';
import { deleteBudgetBalanceEntry, editBudget } from '../../features/budgets/budgetsSlice';

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  console.log(transaction);

  const handleDelete = (e) => {
    //console.log(transaction);
    if(transaction.type === "expense"){
      dispatch(deleteTransaction(transaction));
    }

    if(transaction.type === "budget"){
     dispatch(deleteBudgetBalanceEntry(transaction));
    //  dispatch(editBudget({
    //   category: transaction.category,
    //   amount: -transaction.amount,
    //  }))
    }

  };

  return (
    <li className="transaction-record">
            {transaction.type === "expense" ? "-" : "+"}  
      <span>

        {transaction.amount}&nbsp;&nbsp;{transaction.category}{' '}
        <span className="description">( {transaction.type === "expense" ? "expense: " : ""}{transaction.description} )</span>
      </span>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
}

export default Transaction;
