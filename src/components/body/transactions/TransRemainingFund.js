import React from "react";
import { selectSelectedCurrencySymbol } from "../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransRemainingFund = ({ transaction, gridRow }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  const gridRowStyle = { "grid-row": `${gridRow} / span 1` };

  return (
    <div className="remaining-funds grid-child" style={gridRowStyle}>
      <p className="remaining-funds-text">{selectedCurrencySymbol}0.00</p>
    </div>
  );
};

export default TransRemainingFund;
