import React from "react";

const TransNote = ({ transaction, gridRow, rowClassName }) => {
  const gridRowStyle = { "gridRow": `${gridRow} / span 1` };

  return (
    <div className={"note grid-child " + rowClassName} style={gridRowStyle}>
      <p className="note-text">{transaction.note}</p>
    </div>
  );
};

export default TransNote;
