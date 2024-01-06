import React, { useState, useEffect, useRef } from "react";
import "./newTransaction.css";
import { FaAngleUp } from "react-icons/fa";
import NewTransForm from "../../components/footer/NewTransForm";
import { updateNewTransactionOffsetHeight } from "./newTransactionSlice";
import { useDispatch } from "react-redux";

const NewTransaction = () => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const offsetHeight = componentRef.current.offsetHeight;
    if (isExpanded) {
      dispatch(updateNewTransactionOffsetHeight(offsetHeight));
    } else {
      //when newTransForm is in a closed state, only 1/3 (the top third) of the for  is visible
      dispatch(updateNewTransactionOffsetHeight(offsetHeight / 3));
    }

  }, [isExpanded, dispatch]);


  return (
    <section
      className={`dropdown-container ${isExpanded ? "open" : ""}`}
      ref={componentRef}
    >
      {/* <h2>New Transaction</h2> */}


      <button onClick={() => setIsExpanded(!isExpanded)} className="dropdown-button" name="open-close-new-transaction-form">
        <FaAngleUp className={`icon ${!isExpanded ? "up" : "down"}`} />
      </button>
      <NewTransForm isExpanded={isExpanded} />

    </section>
  );
};

export default NewTransaction;
