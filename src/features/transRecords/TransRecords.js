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
    <section className={`transaction-list-section`}>
      <h2>Transactions</h2>
      <TransactionList transactions={budgetTransactions} listType={"budget"} />
      <TransactionList transactions={expenseTransactions} listType={"expense"} />
    </section>
  );
};

export default TransRecords;
