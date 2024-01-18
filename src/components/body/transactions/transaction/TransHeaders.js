const TransHeaders = () => {
  return (
    <tr>
      <td className="t-header description">Description</td>
      <td className="t-header amount">Amount</td>
      <td className="t-header prev-budget-total">PrevBudgetTotal</td>
      <td className="t-header current-budget-total">CurrentBudgetTotal</td>
      <td className="t-header expenses-total">ExpensesTotal</td>
      <td className="t-header note">Note</td>
      <td className="t-header delete"></td>
    </tr>
  );
};

export default TransHeaders;
