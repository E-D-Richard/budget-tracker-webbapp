import TransHeader from "./transaction/TransHeader";
import Transaction from "./transaction/Transaction";

const TransactionList = ({ expenseTransactions, budgetTransactions }) => {
  return (
    <section className={`transaction-list-section`}>
      <h2>Transactions</h2>

      <div
        className={`budget transaction-list-container ${
          budgetTransactions.length > 0 ? "margin-bottom" : ""
        }`}
      >
        <h3 className="budget">Budget Transactions</h3>
        <table className="budget transaction-list">
          <thead>
            <TransHeader />
          </thead>
          <tbody>
            {budgetTransactions.map((transaction) => (
              <Transaction transaction={transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={`expense transaction-list-container ${
          budgetTransactions.length > 0 ? "margin-bottom" : ""
        }`}
      >
        <h3 className="expense">Expense Transactions</h3>
        <table className="expense transaction-list">
          <thead>
            <TransHeader />
          </thead>
          <tbody>
            {expenseTransactions.map((transaction) => (
              <Transaction transaction={transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionList;
