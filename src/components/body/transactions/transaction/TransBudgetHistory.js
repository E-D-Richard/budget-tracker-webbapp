import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { selectBudgets } from "../../../../features/budgets/budgetsSlice";
import { useSelector } from "react-redux";
import { removeMinusSymbol } from "../../../../utilities/helpers/helperFunctions/otherHelpers";

const TransBudgetHistory = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
  const budgetHistory = useSelector(selectBudgets)[transaction.category].budgetHistoryTotal;

  return <td className="budget-history">{budgetHistory < 0 && "-"}{selectedCurrencySymbol}{removeMinusSymbol(budgetHistory.toFixed(2))}</td>
};

export default TransBudgetHistory;
