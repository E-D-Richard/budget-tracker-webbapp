import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetsSlice";
import Budget from "../../components/Budget";
import AddCategory from "../../components/AddCategory";

const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  return (
    <section className="all-budgets-container">
      <ul>
        {budgets.map((budget) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </ul>
      <AddCategory />
    </section>
  );
};

export default Budgets;

