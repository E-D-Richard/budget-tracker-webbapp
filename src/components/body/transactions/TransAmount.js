import React from "react";
import { selectSelectedCurrencySymbol } from "../../../features/settings/settingsSlice";
import { removeMinusSymbol } from "../../../utilities/helpers/helperFunctions/otherHelpers";
import { useSelector } from "react-redux";

const TransAmount = ({ transaction, gridRow }) => {
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
  const gridRowStyle = {"grid-row": `${gridRow} / span 1`}

  return <div className="amount grid-child" style={gridRowStyle}>{amountJSX}</div>;
};

export default TransAmount;
