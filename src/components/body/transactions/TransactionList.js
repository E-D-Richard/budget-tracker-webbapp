import { useEffect, useState } from "react";
import { capitalizeFirstLetterOfString } from "../../../utilities/helpers/helperFunctions/otherHelpers";
import TransHeaders from "./transaction/TransHeaders";
import Transaction from "./transaction/Transaction";


const TransactionList = ({ transactions, listType }) => {
  const [isMobile, setIsMobile] = useState(true);
  console.log(isMobile)
  const handleResize = (e) => {
    setIsMobile(window.innerWidth < 750);
    
  }

  //set mobileTypeOn Mount
  useEffect(()=>{
    setIsMobile(window.innerWidth < 750);
  },[])

  //onWindowAdjust/Resize - reset device type
  useEffect(() => {
    // Add event listener for the 'resize' event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
      <div
        className={`${listType} transaction-list-container ${
          transactions.length === 0 ? "empty" : ""
        }`}
      >
        <h3 className={`${listType}`}>{capitalizeFirstLetterOfString(listType)} Transactions</h3>
        <table className={`${listType} transaction-list`}>
          <thead>
            <TransHeaders isMobile={isMobile}/>
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
