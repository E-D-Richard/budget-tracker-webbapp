import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import InnerTransactionForm from "./InnerTransactionForm";

export default function TransactionForm() {
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
  

  const dropdownMode = () => {
    if(expanded) {
      return <InnerTransactionForm />
    } else {
      return <h3>New Transaction</h3>
    }
  }

  return (
    <section className="new-transaction-container">
      <h2>New Transaction</h2>
      <div className="dropdown-container">
        <input
          id="checkbox"
          type="checkbox"
          checked={expanded}
          onChange={() => {
            !expanded ? setExpanded(true) : setExpanded(false);
          }}
        ></input>
        <label htmlFor="checkbox" className="checkbox-label">
          {!expanded ? (
            <FaAngleUp className="icon" style={iconStyles} />
          ) : (
            <FaAngleDown className="icon" style={iconStyles} />
          )}
        </label>
        {isDesktop ? <InnerTransactionForm/> : dropdownMode()}
      </div>
    </section>
  );
}
