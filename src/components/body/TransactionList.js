import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ expenseTransactions, budgetTransactions }) => {
  return (
    <section
      className={`transaction-list-section`}
    >
      <h2>Transactions</h2>
      <div>
        <h3>Budget Transactions</h3>
        <ul className="transaction-list">
          {budgetTransactions.map((t) => (
            <Transaction transaction={t} key={t.id} />
          ))}
        </ul>
      </div>

      <div>
        <h3>Expense Transactions</h3>
        <ul className="transaction-list">
          {expenseTransactions.map((t) => (
            <Transaction transaction={t} key={t.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TransactionList;
