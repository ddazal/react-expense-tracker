import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import currency from "currency.js";

const ExpenseCard = ({ expense, onDelete }) => (
  <div className="card">
    <div className="card-content">
      <div className="columns is-mobile mb-0">
        <div className="column">
          <h3 className="is-size-5 has-text-weight-semibold">
            {expense.description}
          </h3>
          <p className="is-size-7">{format(expense.date, "MMM d, yyyy")}</p>
        </div>
        <div className="column has-text-right">
          <p className="has-text-weight-medium is-size-5">
            {currency(expense.amount).format()}
          </p>
          <div className="field is-grouped is-pulled-right mt-2">
            <Link
              to={`/edit/${expense.id}`}
              className="button is-primary is-outlined is-small"
            >
              Edit
            </Link>
            <button
              className="button is-danger is-outlined is-small ml-2"
              onClick={() => onDelete(expense.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExpenseCard;
