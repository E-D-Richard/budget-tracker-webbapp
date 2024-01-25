import "./transactionList.css";
import { useEffect, useState } from "react";
import { capitalizeFirstLetterOfString } from "../../../utilities/helpers/helperFunctions/otherHelpers";
import TransHeaders from "./transaction/TransHeaders";
import Transaction from "./transaction/Transaction";


const TransactionList = ({ transactions, listType }) => {
  const [isMobile, setIsMobile] = useState(true);
  const handleResize = (e) => {
    setIsMobile(window.innerWidth < 750);
  }

  //onWindowAdjust/Resize - reset device type
  useEffect(() => {
    //set mobileType onMount
    setIsMobile(window.innerWidth < 750);
    //then add eventListeners to handle all future screen width resizing adjustments
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return (
      <div
        className={`${listType} transaction-list-container ${
          transactions.length === 0 ? "empty" : ""
        }`}
      >
        <h3 className={`${listType}`}>{capitalizeFirstLetterOfString(listType)} Transactions</h3>
        <table className={`${listType} transaction-list`}>
          <thead className="headers">
            <TransHeaders isMobile={isMobile} listType={listType}/>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <Transaction transaction={transaction} key={transaction.id} listType={listType}/>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default TransactionList;
