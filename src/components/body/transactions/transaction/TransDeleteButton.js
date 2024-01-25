import React from "react";
import { useDispatch } from "react-redux";
import { deleteBudgetTransaction, updateBudgetTotalsBasedOnNewlyDeletedExpense } from "../../../../features/budgets/budgetsSlice";
import { deleteExpenseTransaction } from "../../../../features/transRecords/transRecordsSlice";

const TransDeleteButton = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    if (transaction.type === "expense") {
      dispatch(deleteExpenseTransaction(transaction));
      dispatch(updateBudgetTotalsBasedOnNewlyDeletedExpense(transaction));
    }

    if (transaction.type === "budget") {
      dispatch(deleteBudgetTransaction(transaction));
    }
  };

  return (
    <td className="delete">
      <button onClick={handleDelete} aria-label="Delete">
        X
      </button>
    </td>
  );
};

export default TransDeleteButton;
