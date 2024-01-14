import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../features/transRecords/transRecordsSlice";
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
      <div className="data">
      <p>
          {/* <span>{transaction.type === "expense" ? "-" : "+"}</span> */}
          
        </p>
        <p>
          {" "}
          <span className="description">
            <span className="description-category">{` ${transaction.category}: `}</span>
            {`${transaction.description}`}
            <span>{` ${selectedCurrencySymbol}${transaction.amount.toFixed(2)}`}</span>
          </span>
        </p>
      </div>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
};

export default Transaction;
