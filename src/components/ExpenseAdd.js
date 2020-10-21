import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

import ExpenseForm from "./ExpenseForm";
import { ExpenseContext } from "../contexts/expenses";

const ExpenseAdd = () => {
  const history = useHistory();
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const onSubmit = (expense) => {
    const id = uuidv4();
    setExpenses([...expenses, { id, ...expense }]);
    history.push("/");
  };

  return (
    <ExpenseForm title="Add new expense" onSubmit={onSubmit}>
      Add expense
    </ExpenseForm>
  );
};

export default ExpenseAdd;
