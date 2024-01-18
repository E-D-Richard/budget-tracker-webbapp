import React from "react";
import { useDispatch } from "react-redux";
import { deleteBudgetTransaction } from "../../../../features/budgets/budgetsSlice";
import { deleteExpenseTransaction } from "../../../../features/transRecords/transRecordsSlice";

const TransDeleteButton = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    if (transaction.type === "expense") {
      dispatch(deleteExpenseTransaction(transaction));
    }

    if (transaction.type === "budget") {
      dispatch(deleteBudgetTransaction(transaction));
    }
  };

  return (
    <td className="delete-button-wrapper">
      <button className="delete" onClick={handleDelete} aria-label="Delete">
        X
      </button>
    </td>
  );
};

export default TransDeleteButton;
