import React from "react";
import { useDispatch } from "react-redux";
import { deleteBudgetBalanceEntry } from "../../../features/budgets/budgetsSlice";
import { deleteTransaction } from "../../../features/transRecords/transRecordsSlice";

const TransDeleteButton = ({ transaction, gridRow }) => {
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
    <button
      style={gridRowStyle}
      onClick={handleDelete}
      aria-label="Delete"
      className="delete grid-child"
    >
      X
    </button>
  );
};

export default TransDeleteButton;
