import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetsSlice";
import Budget from "../../components/body/Budget";


const Budgets = () => {
  const budgets = useSelector(selectBudgets);
 
  return (
    <section className="all-budgets-container">
      <ul>
        {budgets.map((budget) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </ul>
    </section>
  );
};

export default Budgets;


