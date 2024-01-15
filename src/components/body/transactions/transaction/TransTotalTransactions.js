import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransTotalTransactions = ({ transaction, gridRow, rowClassName }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  const gridRowStyle = { "gridRow": `${gridRow} / span 1` };

  return (
    <div className={"transactions-total grid-child " + rowClassName} style={gridRowStyle}>
      <p className="transactions-total-text">{selectedCurrencySymbol}0.00</p>
    </div>
  );
};

export default TransTotalTransactions;
