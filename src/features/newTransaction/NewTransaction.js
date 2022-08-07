import React from "react";
import Dropdown from "../../components/footer/Dropdown";

const NewTransaction = ({categories}) => {
  return (
    <Dropdown categories={categories} />
  );
};

export default NewTransaction;
