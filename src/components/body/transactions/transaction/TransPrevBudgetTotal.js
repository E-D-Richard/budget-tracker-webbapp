import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransPrevBudgetTotal = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
  console.log(transaction);

  return <td className="prev-budget-total">{selectedCurrencySymbol}{transaction.prevBudgetTotal.toFixed(2)}</td> 
};

export default TransPrevBudgetTotal;
