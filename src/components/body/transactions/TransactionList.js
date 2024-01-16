import React from "react";
import TransDescription from "./transaction/TransDescription.js";
import TransAmount from "./transaction/TransAmount.js";
import TransNote from "./transaction/TransNote.js";
import TransDeleteButton from "./transaction/TransDeleteButton.js";
import TransRemainingFunds from "./transaction/TransRemainingFunds.js";
import TransPrevRemainingFunds from "./transaction/TransPrevRemainingFunds.js";
import TransTotalTransactions from "./transaction/TransTotalTransactions.js";

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
          {/* {transactionHeaders} */}
          {budgetTransactions.map((transaction, index) => (<TransDescription transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransAmount transaction={transaction} key={transaction.id} gridRow={index + 2}
          rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransPrevRemainingFunds transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransRemainingFunds transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransNote transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"budget-transaction-row-"+(index+2)} />))}
          {budgetTransactions.map((transaction, index) => (<TransDeleteButton transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
        </ul>
      </div>
      

      <div>
        <h3>Expense Transactions</h3>
        <ul className="expense transaction-list grid-container">
          {/* {transactionHeaders} */}
          {expenseTransactions.map((transaction, index) => (<TransDescription transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransAmount transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransPrevRemainingFunds transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransRemainingFunds transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransTotalTransactions transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransNote transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((transaction, index) => (<TransDeleteButton transaction={transaction} key={transaction.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}

        </ul>
      </div>
    </section>
  );
};

export default TransactionList;
