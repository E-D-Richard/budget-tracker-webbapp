import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransExpensesTotal = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  return <td className="expenses-total">{selectedCurrencySymbol}0.00</td>
};

export default TransExpensesTotal;
