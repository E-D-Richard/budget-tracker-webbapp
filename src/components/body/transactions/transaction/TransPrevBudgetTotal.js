import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransPrevBudgetTotal = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  // const gridRowStyle = { "gridRow": `${gridRow} / span 1` };
  // return (
  //   <div className={"prev-budget-total grid-child " + rowClassName} style={gridRowStyle}>
  //     <p className="prev-budget-total-text">{selectedCurrencySymbol}0.00</p>
  //   </div>
  // );
  return <td className="prev-budget-total">{selectedCurrencySymbol}0.00</td>
};

export default TransPrevBudgetTotal;
