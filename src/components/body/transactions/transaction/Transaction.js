import TransAmount from "./TransAmount";
import TransDescription from "./TransDescription";
// import TransPrevBudgetTotal from "./TransPrevBudgetTotal";
// import TransCurrentBudgetTotal from "./TransCurrentBudgetTotal";
// import TransExpensesTotal from "./TransExpensesTotal";
import TransNote from "./TransNote";
import TransDeleteButton from "./TransDeleteButton";

const Transaction = ({ transaction, listType }) => {
  return (
    <tr className={"transaction"}>
      <TransDescription transaction={transaction} />
      <TransAmount transaction={transaction} />
      {/* <TransPrevBudgetTotal transaction={transaction} />
      <TransCurrentBudgetTotal transaction={transaction} />
      <TransExpensesTotal transaction={transaction} /> */}
      {listType === "expense" ? <TransNote transaction={transaction} /> : ""}
      <TransDeleteButton transaction={transaction} />
    </tr>
  );
};

export default Transaction;
