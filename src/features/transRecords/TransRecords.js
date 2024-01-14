import React from "react";
import "./transRecord.css";
import { useSelector } from "react-redux";
import { selectAllExpenseTransactions } from "./transRecordsSlice";
import TransactionList from "../../components/body/TransactionList";
import { selectBudgets } from "../budgets/budgetsSlice";

const TransRecords = () => {
  const expenseTransactions = useSelector(selectAllExpenseTransactions);
  const budgets = useSelector(selectBudgets);
  const budgetTransactions = [];
  for (const budget of budgets) {
    if (budget.history.length > 0) {
      budgetTransactions.push(...budget.history);
    }
  }

  return (
    <TransactionList
      expenseTransactions={expenseTransactions}
      budgetTransactions={budgetTransactions}
    />
  );
};

export default TransRecords;
