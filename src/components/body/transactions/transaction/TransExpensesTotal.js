import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransExpensesTotal = ({ transaction, gridRow, rowClassName }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  // const gridRowStyle = { "gridRow": `${gridRow} / span 1` };

  // return (
  //   <div className={"expenses-total grid-child " + rowClassName} style={gridRowStyle}>
  //     <p className="expenses-total-text">{selectedCurrencySymbol}0.00</p>
  //   </div>
  // );

  return <td className="current-budget-total">{selectedCurrencySymbol}0.00</td>
};

export default TransExpensesTotal;
