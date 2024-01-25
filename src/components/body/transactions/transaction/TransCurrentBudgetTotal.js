import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransCurrentBudgetTotal = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

    return <td className="current-budget-total">{selectedCurrencySymbol}{transaction.currentBudgetTotal.toFixed(2)}</td>
};

export default TransCurrentBudgetTotal;
