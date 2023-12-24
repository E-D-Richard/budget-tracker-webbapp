import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetsSlice";
import Budget from "../../components/body/Budget";


const Budgets = () => {
  const budgets = useSelector(selectBudgets);

  const budgetsInAlphabeticalOrder = [...budgets].sort((a, b) =>  a.category.localeCompare(b.category));
  return (
    <section className="all-budgets-container">
      <ul>
        {budgetsInAlphabeticalOrder.map((budget) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </ul>
    </section>
  );
};

export default Budgets;


