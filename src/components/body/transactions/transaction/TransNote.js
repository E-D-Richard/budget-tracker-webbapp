import React from "react";

const TransNote = ({ transaction, gridRow, rowClassName }) => {
  const gridRowStyle = { "grid-row": `${gridRow} / span 1` };

  return (
    <div className={"note grid-child " + rowClassName} style={gridRowStyle}>
      <p className="note-text">{transaction.note}</p>
    </div>
  );
};

export default TransNote;
