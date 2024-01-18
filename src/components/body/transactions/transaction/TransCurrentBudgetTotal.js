import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";

const TransCurrentBudgetTotal = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);

    return <td className="current-budget-total">{selectedCurrencySymbol}0.00</td>
};

export default TransCurrentBudgetTotal;
