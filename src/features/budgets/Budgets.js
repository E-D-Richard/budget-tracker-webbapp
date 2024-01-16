import React from "react";
import "./budgets.css";
import { useSelector } from "react-redux";
import { selectBudgetsInArrayFormat } from "./budgetsSlice";
import Budget from "../../components/body/Budget";


const Budgets = () => {
  const budgets = useSelector(selectBudgetsInArrayFormat);
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


