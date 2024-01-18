import { capitalizeFirstLetterOfString } from "../../../utilities/helpers/helperFunctions/otherHelpers";
import TransHeader from "./transaction/TransHeaders";
import Transaction from "./transaction/Transaction";

const TransactionList = ({ transactions, listType }) => {
  return (
      <div
        className={`${listType} transaction-list-container ${
          transactions.length === 0 ? "empty" : ""
        }`}
      >
        <h3 className={`${listType}`}>{capitalizeFirstLetterOfString(listType)} Transactions</h3>
        <table className={`${listType} transaction-list`}>
          <thead>
            <TransHeader />
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <Transaction transaction={transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default TransactionList;
