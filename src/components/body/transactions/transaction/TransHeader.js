const TransHeader = ({ name, headerClassName ,transactions }) => {
  const gridRowStyle = { gridRow: `${1} / span 1` };

  if(transactions.length > 0){
    return (
      <div className={`header-data ${headerClassName} grid-child row-1`} style={gridRowStyle}>
        <h6 className="header-text">{name}</h6>
      </div>
    );
  } else {
    return;
  }

};

export default TransHeader;
