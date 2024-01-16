import React from "react";
import TransDescription from "./transaction/TransDescription.js";
import TransAmount from "./transaction/TransAmount.js";
import TransNote from "./transaction/TransNote.js";
import TransDeleteButton from "./transaction/TransDeleteButton.js";
import TransHeader from "./transaction/TransHeader.js";
import TransPrevBudgetTotal from "./transaction/TransPrevBudgetTotal.js";
import TransCurrentBudgetTotal from "./transaction/TransCurrentBudgetTotal.js";
import TransExpensesTotal from "./transaction/TransExpensesTotal.js";

const TransactionList = ({ expenseTransactions, budgetTransactions }) => {
  

  // const transactionHeaders = (

  //     <div className="header-data desc grid-child">
  //       <h6 className="header-text">Desc</h6>
  //     </div>
  //     <div className="header-data amount grid-child">
  //       <h6 className="header-text">Amount</h6>
  //     </div>
  //     <div className="header-data funds-remaining grid-child">
  //       <h6 className="header-text">Remaining</h6>
  //     </div>
  //     <div className="header-data note grid-child">
  //       <h6 className="header-text">Note</h6>
  //     </div>

  // );
  return (
    <section className={`transaction-list-section`}>
      <h2>Transactions</h2>
      <div>
        <h3>Budget Transactions</h3>
        <ul className="budget transaction-list grid-container">
          <TransHeader name={"Description"} headerClassName={"description"}  transactions={budgetTransactions}/>
          <TransHeader name={"Amount"} headerClassName={"amount"} transactions={budgetTransactions}/>
          <TransHeader name={"PrevBudgetTotal"} headerClassName={"prev-budget-total"} transactions={budgetTransactions}/>
          <TransHeader name={"CurrentBudgetTotal"} headerClassName={"current-budget-total"} transactions={budgetTransactions}/>
          <TransHeader name={"ExpensesTotal"} headerClassName={"expenses-total"} transactions={budgetTransactions}/>
          <TransHeader name={"Note"} headerClassName={"note"} transactions={budgetTransactions}/>
          {budgetTransactions.map((transaction, index) => (<TransDescription transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransAmount transaction={transaction} key={transaction.id} gridRow={index + 2}
          rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransPrevBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransCurrentBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransExpensesTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransNote transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransDeleteButton transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
        </ul>
      </div>
      

      <div>
        <h3>Expense Transactions</h3>
        <ul className="expense transaction-list grid-container">
          <TransHeader name={"Description"} headerClassName={"description"}  transactions={expenseTransactions}/>
          <TransHeader name={"Amount"} headerClassName={"amount"} transactions={expenseTransactions}/>
          <TransHeader name={"PrevBudgetTotal"} headerClassName={"prev-budget-total"} transactions={expenseTransactions}/>
          <TransHeader name={"CurrentBudgetTotal"} headerClassName={"current-budget-total"} transactions={expenseTransactions}/>
          <TransHeader name={"ExpensesTotal"} headerClassName={"expenses-total"} transactions={expenseTransactions}/>
          <TransHeader name={"Note"} headerClassName={"note"} transactions={expenseTransactions}/>
          {expenseTransactions.map((transaction, index) => (<TransDescription transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransAmount transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransPrevBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransCurrentBudgetTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransExpensesTotal transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransNote transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransDeleteButton transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}

        </ul>
      </div>
    </section>
  );
};

export default TransactionList;
