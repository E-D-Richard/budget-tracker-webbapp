import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../features/transRecords/transRecordsSlice";
import { deleteBudgetBalanceEntry } from "../../features/budgets/budgetsSlice";
import { selectSelectedCurrencySymbol } from "../../features/settings/settingsSlice";
import { removeMinusSymbol } from "../../utilities/helpers/helperFunctions/otherHelpers";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
  const budgetDescription = `${
    transaction.amount > 0 ? "added" : "removed"
  } balance of ${selectedCurrencySymbol}${removeMinusSymbol(
    transaction.amount.toFixed(2)
  )} ${transaction.amount > 0 ? "to" : "from"} ${transaction.category}`;
  const expenseDescription = `added an expense of ${selectedCurrencySymbol}${transaction.amount.toFixed(
    2
  )} to ${transaction.category}`;

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
      <div className="data-wrapper">
        <div className="description-data">
        <h6>Transaction:&nbsp;</h6>
        <p className="description-text">
          {transaction.type === "budget"
            ? budgetDescription
            : expenseDescription}
        </p>
        </div>
        {transaction.note.length ? (
          <div className="note-data">
            <h6>Note:&nbsp;</h6>
            <p className="note-text">{transaction.note}</p>
          </div>
        ) : ""}
      </div>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
};

export default Transaction;
