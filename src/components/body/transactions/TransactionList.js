import React from "react";
import TransDescription from "./transaction/TransDescription.js";
import TransAmount from "./transaction/TransAmount.js";
import TransRemainingFund from "./transaction/TransRemainingFund.js";
import TransNote from "./transaction/TransNote.js";
import TransDeleteButton from "./transaction/TransDeleteButton.js";

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
          {budgetTransactions.map((t, index) => (<TransDescription transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((t, index) => (<TransAmount transaction={t} key={t.id} gridRow={index + 2}
          rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((t, index) => (<TransRemainingFund transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {budgetTransactions.map((t, index) => (<TransNote transaction={t} key={t.id} gridRow={index + 2} rowClassName={"budget-transaction-row-"+(index+2)} />))}
          {budgetTransactions.map((t, index) => (<TransDeleteButton transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
        </ul>
      </div>

      <div>
        <h3>Expense Transactions</h3>
        <ul className="expense transaction-list grid-container">
          {/* {transactionHeaders} */}
          {expenseTransactions.map((t, index) => (<TransDescription transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((t, index) => (<TransAmount transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((t, index) => (<TransRemainingFund transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((t, index) => (<TransNote transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}
          {expenseTransactions.map((t, index) => (<TransDeleteButton transaction={t} key={t.id} gridRow={index + 2} rowClassName={"row-"+(index+2)} />))}

        </ul>
      </div>
    </section>
  );
};

export default TransactionList;
