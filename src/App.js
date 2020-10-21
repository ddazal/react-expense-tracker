import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";

import ExpenseList from "./components/ExpenseList";
import ExpenseAdd from "./components/ExpenseAdd";
import ExpenseEdit from "./components/ExpenseEdit";
import { ExpenseContextProvider } from "./contexts/expenses";

function App() {
  return (
    <ExpenseContextProvider>
      <Router>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <NavLink
                exact
                className="navbar-item has-text-weight-bold is-size-5"
                to="/"
              >
                Expenses tracker
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="container px-4 py-5">
          <Switch>
            <Route exact path="/">
              <ExpenseList />
            </Route>
            <Route path="/add">
              <ExpenseAdd />
            </Route>
            <Route path="/edit/:id">
              <ExpenseEdit />
            </Route>
          </Switch>
        </div>
      </Router>
    </ExpenseContextProvider>
  );
}

export default App;
