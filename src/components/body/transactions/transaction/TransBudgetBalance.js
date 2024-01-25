import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { selectBudgets } from "../../../../features/budgets/budgetsSlice";
import { useSelector } from "react-redux";
import { removeMinusSymbol } from "../../../../utilities/helpers/helperFunctions/otherHelpers";

const TransBudgetBalance = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
  const budgetBalance = useSelector(selectBudgets)[transaction.category].currentTotal;

  return <td className="budget-balance">{budgetBalance < 0 && "-"}{selectedCurrencySymbol}{removeMinusSymbol(budgetBalance.toFixed(2))}</td>
};

export default TransBudgetBalance;
