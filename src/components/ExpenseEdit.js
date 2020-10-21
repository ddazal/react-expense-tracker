import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ExpenseContext } from "../contexts/expenses";

import ExpenseForm from "./ExpenseForm";

const ExpenseEdit = () => {
  const history = useHistory();
  const { id } = useParams();
  const { expenses, setExpenses } = useContext(ExpenseContext);
  let [expense, setExpense] = useState();

  useEffect(() => {
    const exp = expenses.find((expenses) => expenses.id === id);
    setExpense({ ...exp });
  }, [expenses, id]);

  const onSubmit = (update) => {
    const expenseIndex = expenses.findIndex((expense) => expense.id === id);
    expenses.splice(expenseIndex, 1, { id, ...update });
    setExpenses([...expenses]);
    history.push("/");
  };

  return expense ? (
    <ExpenseForm title="Edit expense" onSubmit={onSubmit} expense={expense}>
      Update
    </ExpenseForm>
  ) : null;
};

export default ExpenseEdit;
