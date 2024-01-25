const TransHeaders = ({ isMobile, listType }) => {
  // if(isMobile){
  //   return (
  //     <tr>
  //     <td className="t-header description">Desc</td>
  //     <td className="t-header amount">Amnt</td>
  //     {/* <td className="t-header prev-budget-total">Prev <br /> Bdgt <br/> Ttl</td>
  //     <td className="t-header current-budget-total">Cur <br /> Bdgt <br /> Ttl</td>
  //     <td className="t-header expenses-total">Exps Total</td> */}
  //     {listType === "expense" ? <td className="t-header note">Note</td> :""}
  //     <td className="t-header delete"></td>
  //   </tr>
  //   )
  // }
  return (
    <tr>
      <td className="t-header description">Description</td>
      <td className="t-header amount">Amount</td>
      <td className="t-header prev-budget-total">
        Prev <br /> Budget <br /> Total
      </td>
      <td className="t-header current-budget-total">Current <br /> Budget <br /> Total</td>
      <td className="t-header expenses-total">Expenses <br />Total</td>
      {/* {listType === "expense" ? <td className="t-header note">Note</td> :""} */}
      <td className="t-header note">Note</td>
      <td className="t-header delete"></td>
    </tr>
  );
};

export default TransHeaders;
