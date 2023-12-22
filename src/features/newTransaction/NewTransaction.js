import React from "react";
import Dropdown from "./Dropdown";
import "./newTransaction.css";


const NewTransaction = ({categories}) => {
  return (
    <Dropdown categories={categories} />
  );
};

export default NewTransaction;
