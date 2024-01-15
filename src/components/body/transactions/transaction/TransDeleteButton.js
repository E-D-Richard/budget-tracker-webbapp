import React from "react";
import { useDispatch } from "react-redux";
import { deleteBudgetBalanceEntry } from "../../../../features/budgets/budgetsSlice";
import { deleteTransaction } from "../../../../features/transRecords/transRecordsSlice";

const TransDeleteButton = ({ transaction, gridRow, rowClassName }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    if (transaction.type === "expense") {
      dispatch(deleteTransaction(transaction));
    }

    if (transaction.type === "budget") {
      dispatch(deleteBudgetBalanceEntry(transaction));
    }
  };
  const gridRowStyle = { "grid-row": `${gridRow} / span 1` };

  return (
    <div style={gridRowStyle} className={"delete-wrapper grid-child " + rowClassName}>
      <button
        className="delete-button"
        onClick={handleDelete}
        aria-label="Delete"
      >
        X
      </button>
    </div>
  );
};

export default TransDeleteButton;
