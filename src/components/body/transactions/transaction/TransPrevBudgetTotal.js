import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransPrevBudgetTotal = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

  return <td className="prev-budget-total">{selectedCurrencySymbol}0.00</td>
};

export default TransPrevBudgetTotal;
