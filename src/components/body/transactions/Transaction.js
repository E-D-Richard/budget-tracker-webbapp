// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTransaction } from "../../../features/transRecords/transRecordsSlice";
// import { deleteBudgetBalanceEntry } from "../../../features/budgets/budgetsSlice";
// import { selectSelectedCurrencySymbol } from "../../../features/settings/settingsSlice";
// import { removeMinusSymbol } from "../../../utilities/helpers/helperFunctions/otherHelpers";

// const Transaction = ({ transaction }) => {
//   const dispatch = useDispatch();
//   const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
//   let descriptionJsx;
//   const formattedAmount = `${selectedCurrencySymbol}${removeMinusSymbol(transaction.amount.toFixed(2))}`
//   const amountJSXClassName = `amount-${(transaction.type === "expense") ? "expense" : (transaction.amount > 0) ? "positive": "negative"}`
//   const amountJSX = <span className={amountJSXClassName}>{formattedAmount}</span>

//   console.log(transaction.type)
//   //Note: new expense transactions can only be positive (form prevents negative expense submissions)
//   if(transaction.type === "expense"){
//     descriptionJsx =
//     <p className="description-text">
//       expense of &nbsp;{amountJSX}&nbsp; added to {transaction.category}
//     </p> 
//   } else if(transaction.type === "budget" && transaction.amount > 0){
//     descriptionJsx = 
//     <p className="description-text">
//       balance of &nbsp;{amountJSX}&nbsp; added to {transaction.category}
//     </p>
//   } else if(transaction.type === "budget" && transaction.amount < 0){
//     descriptionJsx = 
//     <p className="description-text">
//       balance of &nbsp;{amountJSX}&nbsp; removed from {transaction.category}
//     </p>
//   }

//   const handleDelete = (e) => {
//     if (transaction.type === "expense") {
//       dispatch(deleteTransaction(transaction));
//     }

//     if (transaction.type === "budget") {
//       dispatch(deleteBudgetBalanceEntry(transaction));
//     }
//   };

//   return (
//     <li className="transaction-record grid-container">
    
//         <div className="description-data grid-child">
//         {/* <h6>Transaction:&nbsp;</h6> */}
//         {descriptionJsx}
//         </div>

//         <div className="amount-data grid-child">
//           <p className="amount-text">{amountJSX}</p>
//         </div>
//         <div className="total-data grid-child">
//           <p className="total-text">notes are going to move everything 000</p>
//         </div>

//         {transaction.note.length ? (
//           <div className="note-data grid-child">
//             <p className="note-text">{transaction.note}</p>
//           </div>
//         ) : ""}

//       <button onClick={handleDelete} aria-label="Delete" className="delete grid-child" >
//         X
//       </button>
//     </li>
//   );
// };

// export default Transaction;
