import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";

import ExpenseList from "./components/ExpenseList";

function App() {
  return (
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
          <Route path="/">
            <ExpenseList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
