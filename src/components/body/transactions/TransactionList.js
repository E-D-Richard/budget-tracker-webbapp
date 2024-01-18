import Transaction from "./transaction/Transaction";

const TransactionList = ({ expenseTransactions, budgetTransactions }) => {
  return (
    <section className={`transaction-list-section`}>
      <h2>Transactions</h2>

      <div className={`budget transaction-list-container ${budgetTransactions.length > 0 ? "margin-bottom" : ""}`}>
        <h3 className="budget">Budget Transactions</h3>
        <table className="budget transaction-list">
          <tbody>
            {budgetTransactions.map((transaction) => (
              <Transaction transaction={transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div className={`expense transaction-list-container ${budgetTransactions.length > 0 ? "margin-bottom" : ""}`}>
        <h3 className="expense">Expense Transactions</h3>
        <table className="expense transaction-list">
          <tbody>
            {expenseTransactions.map((transaction) => (
              <Transaction transaction={transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>

    // <section className={`transaction-list-section`} >
    //   <h2>Transactions</h2>
    //   <div>
    //     <h3>Budget Transactions</h3>
    //     <ul className="budget transaction-list grid-container">
    //       <TransHeader name={"Description"} headerColumnClassName={"description"}  transactions={budgetTransactions}/>
    //       <TransHeader name={"Amount"} headerColumnClassName={"amount"} transactions={budgetTransactions}/>
    //       <TransHeader name={"PrevBudgetTotal"} headerColumnClassName={"prev-budget-total"} transactions={budgetTransactions}/>
    //       <TransHeader name={"CurrentBudgetTotal"} headerColumnClassName={"current-budget-total"} transactions={budgetTransactions}/>
    //       <TransHeader name={"ExpensesTotal"} headerColumnClassName={"expenses-total"} transactions={budgetTransactions}/>
    //       <TransHeader name={"Note"} headerColumnClassName={"note"} transactions={budgetTransactions}/>
    //       {budgetTransactions.map((transaction, index) => (<TransDescription transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {budgetTransactions.map((transaction, index) => (<TransAmount transaction={transaction} key={transaction.id} gridRow={index + 2}
    //       rowClassName={"row-"+(index+2)} />))}
    //       {budgetTransactions.map((transaction, index) => (<TransPrevBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {budgetTransactions.map((transaction, index) => (<TransCurrentBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {budgetTransactions.map((transaction, index) => (<TransExpensesTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {budgetTransactions.map((transaction, index) => (<TransNote transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {budgetTransactions.map((transaction, index) => (<TransDeleteButton transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //     </ul>
    //   </div>

    //   <div>
    //     <h3>Expense Transactions</h3>
    //     <ul className="expense transaction-list grid-container">
    //       <TransHeader name={"Description"} headerColumnClassName={"description"}  transactions={expenseTransactions}/>
    //       <TransHeader name={"Amount"} headerColumnClassName={"amount"} transactions={expenseTransactions}/>
    //       <TransHeader name={"PrevBudgetTotal"} headerColumnClassName={"prev-budget-total"} transactions={expenseTransactions}/>
    //       <TransHeader name={"CurrentBudgetTotal"} headerColumnClassName={"current-budget-total"} transactions={expenseTransactions}/>
    //       <TransHeader name={"ExpensesTotal"} headerColumnClassName={"expenses-total"} transactions={expenseTransactions}/>
    //       <TransHeader name={"Note"} headerColumnClassName={"note"} transactions={expenseTransactions}/>
    //       {expenseTransactions.map((transaction, index) => (<TransDescription transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {expenseTransactions.map((transaction, index) => (<TransAmount transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {expenseTransactions.map((transaction, index) => (<TransPrevBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {expenseTransactions.map((transaction, index) => (<TransCurrentBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {expenseTransactions.map((transaction, index) => (<TransExpensesTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {expenseTransactions.map((transaction, index) => (<TransNote transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
    //       {expenseTransactions.map((transaction, index) => (<TransDeleteButton transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}

    //     </ul>
    //   </div>
    // </section>
  );
};

export default TransactionList;
