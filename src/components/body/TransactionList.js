import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {
  return (
    <section className="transaction-record-section">
      <h2>Transactions</h2>
      <ul className="transaction-list">
        {transactions.map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;
