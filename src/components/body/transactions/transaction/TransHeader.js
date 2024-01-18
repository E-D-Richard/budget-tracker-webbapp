const TransHeader = ({ name, headerColumnClassName ,transactions }) => {
  const gridRowStyle = { gridRow: `${1} / span 1` };
  const rowClassName = "row-1";

  if(transactions.length > 0){
    return (
      <div className={`header-data ${headerColumnClassName} grid-child ${rowClassName}`} style={gridRowStyle}>
        <h6 className="header-text">{name}</h6>
      </div>
    );
  } else {
    return;
  }

};

export default TransHeader;
