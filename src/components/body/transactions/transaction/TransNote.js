import React from "react";

const TransNote = ({ transaction }) => {

  return <td className="note">{transaction.note}</td>
};

export default TransNote;
