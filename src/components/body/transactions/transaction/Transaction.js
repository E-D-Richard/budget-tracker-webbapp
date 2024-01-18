import { useSelector } from "react-redux";
import { selectSelectedCurrencySymbol } from "../../../../features/settings/settingsSlice";
import { removeMinusSymbol } from "../../../../utilities/helpers/helperFunctions/otherHelpers";
import TransAmount from "./TransAmount";
import TransDescription from "./TransDescription";
import TransPrevBudgetTotal from "./TransPrevBudgetTotal";
import TransCurrentBudgetTotal from "./TransCurrentBudgetTotal";
import TransExpensesTotal from "./TransExpensesTotal";
import TransNote from "./TransNote";
import TransDeleteButton from "./TransDeleteButton";

const Transaction = ({ transaction }) => {
  return (
    <tr>
      <TransDescription transaction={transaction} />
      <TransAmount transaction={transaction} />
      <TransPrevBudgetTotal transaction={transaction} />
      <TransCurrentBudgetTotal transaction={transaction} />
      <TransExpensesTotal transaction={transaction} />
      <TransNote transaction={transaction} />
      <TransDeleteButton transaction={transaction} />
    </tr>
  );
};

export default Transaction;
