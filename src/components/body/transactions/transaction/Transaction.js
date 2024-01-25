import TransAmount from "./TransAmount";
import TransDescription from "./TransDescription";
import TransBudgetBalance from "./TransBudgetBalance";
import TransExpensesTotal from "./TransExpenseHistory";
import TransNote from "./TransNote";
import TransDeleteButton from "./TransDeleteButton";
import TransBudgetHistory from "./TransBudgetHistory";

const Transaction = ({ transaction, listType }) => {
  return (
    <tr className={"transaction"}>
      <TransDescription transaction={transaction} />
      <TransAmount transaction={transaction} />
      <TransBudgetBalance transaction={transaction} />
      <TransExpensesTotal transaction={transaction} />
      <TransBudgetHistory transaction={transaction} />
      <TransNote transaction={transaction} />
      {/* {listType === "expense" ? <TransNote transaction={transaction} /> : ""} */}
      <TransDeleteButton transaction={transaction} />
    </tr>
  );
};

export default Transaction;
