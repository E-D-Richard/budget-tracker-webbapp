const TransHeader = () => {
  return (
    <tr>
      <td className="t-header description">description</td>
      <td className="t-header amount">amount</td>
      <td className="t-header prev-budget-total">prevBudgetTotal</td>
      <td className="t-header current-budget-total">currentBudgetTotal</td>
      <td className="t-header expenses-total">expensesTotal</td>
      <td className="t-header note">notes</td>
      <td className="t-header delete"></td>
    </tr>
  );
};

export default TransHeader;
