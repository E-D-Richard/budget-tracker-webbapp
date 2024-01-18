import React from "react";

const TransNote = ({ transaction }) => {
  // const gridRowStyle = { "gridRow": `${gridRow} / span 1` };

  // return (
  //   <div className={"note grid-child " + rowClassName} style={gridRowStyle}>
  //     <p className="note-text">{transaction.note}</p>
  //   </div>
  // );
  return <td className="note">{transaction.note}sample note</td>
};

export default TransNote;
