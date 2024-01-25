const TransHeaders = ({ isMobile, listType }) => {

  return (
    <tr>
      <td className="t-header description">Description</td>
      <td className="t-header amount">Amount</td>
      <td className="t-header budget-balance"> Budget Balance</td>
      <td className="t-header expense-history">Expense History</td>
      <td className="t-header budget-history"> Budget History</td>
      {/* {listType === "expense" ? <td className="t-header note">Note</td> :""} */}
      <td className="t-header note">Note</td>
      <td className="t-header delete"></td>
    </tr>
  );
};

export default TransHeaders;
