import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../features/transRecord/transRecordSlice";
import { deleteBudgetBalanceEntry } from "../../features/budgets/budgetsSlice";
import { selectSelectedCurrencySymbol } from "../../features/settings/settingsSlice";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  const handleDelete = (e) => {
    if (transaction.type === "expense") {
      dispatch(deleteTransaction(transaction));
    }

    if (transaction.type === "budget") {
      dispatch(deleteBudgetBalanceEntry(transaction));
    }
  };

  return (
    <li className="transaction-record">
      <div>
        <p>
          <span>{transaction.type === "expense" ? "-" : "+"}</span>
          <span>
            {` ${selectedCurrencySymbol}${transaction.amount.toFixed(2)}`}
          </span>
          <span className="trans-list-description">{` ${transaction.category}: ${transaction.description}`}</span>
        </p>
      </div>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
};

export default Transaction;
