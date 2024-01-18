const TransHeaders = () => {
  return (
    <tr>
      <td className="t-header description">Description</td>
      <td className="t-header amount">Amount</td>
      <td className="t-header prev-budget-total">PBTotal</td>
      <td className="t-header current-budget-total">CBTotal</td>
      <td className="t-header expenses-total">ExTotal</td>
      <td className="t-header note">Note</td>
      <td className="t-header delete"></td>
    </tr>
  );
};

export default TransHeaders;
