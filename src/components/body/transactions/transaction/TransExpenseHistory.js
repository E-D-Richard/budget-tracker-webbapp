import React from "react";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../../../features/transRecords/transRecordsSlice";

const TransExpenseHistory = ({ transaction }) => {
  const selectedCurrencySymbol = useSelector(selectSelectedCurrencySymbol);
  const totalExpenses = useSelector(selectTransactions)[transaction.category].total;

  return <td className="expense-history">{selectedCurrencySymbol}{totalExpenses.toFixed(2)}</td>
};

export default TransExpenseHistory;
