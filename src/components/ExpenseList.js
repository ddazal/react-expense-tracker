import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ExpenseCard from "./ExpenseCard";
import { ExpenseContext } from "../contexts/expenses";

const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const deleteExpense = (id) => {
    const answer = window.confirm("Delete expense?");
    if (!answer) {
      return;
    }
    const expenseIndex = expenses.findIndex((expense) => expense.id === id);
    expenses.splice(expenseIndex, 1);
    setExpenses([...expenses]);
  };

  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-half">
          <h1 className="is-size-4">Expenses list</h1>
        </div>
        <div className="column is-half has-text-right">
          <Link to="/add" className="button is-small is-outlined is-primary">
            Add new
          </Link>
        </div>
      </div>
      {expenses && expenses.length ? (
        expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            onDelete={deleteExpense}
          />
        ))
      ) : (
        <p className="has-text-centered">
          There are no expenses registered.{" "}
          <Link to="/add" className="has-text-primary">
            Add a new one
          </Link>
        </p>
      )}
    </>
  );
};

export default ExpenseList;
