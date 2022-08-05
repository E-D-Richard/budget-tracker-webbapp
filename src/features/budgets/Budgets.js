import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetsSlice";
import {Budget} from "../../components/Budget";
import {AddCategory} from "../../components/AddCategory";
import { DeleteCategory } from "../../components/DeleteCategory";
import { selectTransactions } from "../transactions/transactionsSlice";

const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  const categories = Object.keys(useSelector(selectTransactions));
  return (
    <section className="all-budgets-container">
      <ul>
        {budgets.map((budget) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </ul>
      <AddCategory categories={categories} />
      <DeleteCategory categories={categories} />
    </section>
  );
};

export default Budgets;


