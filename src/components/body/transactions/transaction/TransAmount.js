import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { removeMinusSymbol } from "../../../../utilities/helpers/helperFunctions/otherHelpers";
import { useSelector } from "react-redux";

const TransAmount = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
  const formattedAmount = `${selectedCurrencySymbol}${removeMinusSymbol(
    transaction.amount.toFixed(2)
  )}`;
  const amountJSXClassName = `amount-${
    transaction.type === "expense"
      ? "expense"
      : transaction.amount > 0
      ? "positive"
      : "negative"
  }`;
  const amountJSX = (
    <span className={amountJSXClassName}>{formattedAmount}</span>
  );
  // const gridRowStyle = {"gridRow": `${gridRow} / span 1`}
  // return <div className={"amount grid-child " + rowClassName} style={gridRowStyle}>{amountJSX}</div>;
  return <td className="amount">{amountJSX}</td>
};

export default TransAmount;
