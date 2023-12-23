import React, { useState, useEffect, useRef } from "react";
import "./newTransaction.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import NewTransForm from "../../components/footer/NewTransForm";
import { updateNewTransactionOffsetHeight } from "./newTransactionSlice";
import { useDispatch } from "react-redux";

const NewTransaction = () => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const offsetHeight = componentRef.current.offsetHeight;
    dispatch(updateNewTransactionOffsetHeight(offsetHeight));
  }, [isExpanded, dispatch]);


  return (
    <section 
      className={`new-trans-container`}
      ref={componentRef} 
    >
      {/* <h2>New Transaction</h2> */}

      <div className="dropdown-container">
        <button onClick={()=>setIsExpanded(!isExpanded)} className="dropdown-btn">
          {!isExpanded ? (
            <FaAngleUp className="icon" style={{ fontSize: "5rem" }} />
          ) : (
            <FaAngleDown className="icon" style={{ fontSize: "5rem" }} />
          )}
        </button>
        {isExpanded && <NewTransForm />}
      </div>
    </section>
  );
};

export default NewTransaction;
