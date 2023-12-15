import React from "react";
import { useSelector } from "react-redux";
import { selectFlattenedTransactions } from "./transRecordSlice";
import TransactionList from "../../components/body/TransactionList";
import { selectBudgets } from "../budgets/budgetsSlice";

const TransRecord = () => {
  const expenseTransactions = useSelector(selectFlattenedTransactions);
  const budgets = useSelector(selectBudgets);
  const budgetTransactions = [];
  for (const budget of budgets) {
    if (budget.history.length > 0) {
      budgetTransactions.push(...budget.history);
    }
  }

  //console.log(allTransactions);

  return (
    <TransactionList
      expenseTransactions={expenseTransactions}
      budgetTransactions={budgetTransactions}
    />
  );
};

export default TransRecord;
