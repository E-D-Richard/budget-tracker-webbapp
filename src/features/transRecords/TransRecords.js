import React from "react";
import "./transRecords.css";
import { useSelector } from "react-redux";
import { selectAllExpenseTransactions } from "./transRecordsSlice";
import TransactionList from "../../components/body/transactions/TransactionList";
import { selectAllBudgetTransactions } from "../budgets/budgetsSlice";

const TransRecords = () => {
  const expenseTransactions = useSelector(selectAllExpenseTransactions);
  const budgetTransactions = useSelector(selectAllBudgetTransactions);

  return (
    <TransactionList
      expenseTransactions={expenseTransactions}
      budgetTransactions={budgetTransactions}
    />
  );
};

export default TransRecords;
