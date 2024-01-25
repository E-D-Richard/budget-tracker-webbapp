import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetBalanceEntry, deleteBudgetTransaction, selectBudgets, updateBudgetTotalsBasedOnNewlyDeletedExpense } from "../../../../features/budgets/budgetsSlice";
import { deleteExpenseTransaction, selectTransactions } from "../../../../features/transRecords/transRecordsSlice";

const TransDeleteButton = ({ transaction }) => {
  const dispatch = useDispatch();
  const selectedCategoryTotalExpenses = useSelector(selectTransactions)[transaction.category].total;
  const currentBudgetTotal = useSelector(selectBudgets)[transaction.category].currentTotal;
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
