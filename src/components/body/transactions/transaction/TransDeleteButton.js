import React from "react";
import { useDispatch } from "react-redux";
import { deleteBudgetTransaction } from "../../../../features/budgets/budgetsSlice";
import { deleteExpenseTransaction } from "../../../../features/transRecords/transRecordsSlice";

const TransDeleteButton = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    if (transaction.type === "expense") {
      dispatch(deleteExpenseTransaction(transaction));
    }

    if (transaction.type === "budget") {
      dispatch(deleteBudgetTransaction(transaction));
    }
  };
  // const gridRowStyle = { "gridRow": `${gridRow} / span 1` };

  // return (
  //   <div style={gridRowStyle} className={"delete-wrapper grid-child " + rowClassName}>
  //     <button
  //       className="delete-button"
  //       onClick={handleDelete}
  //       aria-label="Delete"
  //     >
  //       X
  //     </button>
  //   </div>
  //);
  return (
    <td className="delete-button-wrapper">
      <button className="delete" onClick={handleDelete} aria-label="Delete">
        X
      </button>
    </td>
  );
};

export default TransDeleteButton;
