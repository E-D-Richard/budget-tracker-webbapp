import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import InnerTransactionForm from "./InnerTransactionForm";

const NewTransaction = () => {
  let isDesktop = window.innerWidth >= 850;
  const [expanded, setExpanded] = useState(isDesktop ? true : false);
  const iconStyles = { fontSize: "5rem" };


  const updateScreenWidth = () => {
    isDesktop = window.innerWidth >= 850;
    isDesktop ? setExpanded(true) : setExpanded(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  });

  const handleClick = () => {
    !expanded ? setExpanded(true): setExpanded(false);
  }

  return (
    <section className="new-trans-container">
      <h2>New Transaction</h2>
      {!isDesktop ? (
        <div className="dropdown-container" >
          <button onClick={handleClick} className="dropdown-btn">
            {!expanded ? (
              <FaAngleUp className="icon" style={iconStyles} />
            ) : (
              <FaAngleDown className="icon" style={iconStyles} />
            )}
          </button>
          {expanded ? <InnerTransactionForm /> :<h3>New Transaction</h3>}
        </div>
      ) : (
        <InnerTransactionForm />
      )}
    </section>
  );
}

export default NewTransaction;