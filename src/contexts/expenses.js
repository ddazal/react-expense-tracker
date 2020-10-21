import React, { useState } from "react";
import { EXPENSES } from "../mock-expenses";

const ExpenseContext = React.createContext();

const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(EXPENSES);
  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseContextProvider };
