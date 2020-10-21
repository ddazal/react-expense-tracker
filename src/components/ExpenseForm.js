import React, { useState } from "react";

const ExpenseForm = ({ title, onSubmit, children, expense }) => {
  const [description, setDescription] = useState(expense?.description || "");
  const [amount, setAmount] = useState(expense?.amount || "");
  const [date, setDate] = useState(expense?.date || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { description, amount, date: new Date(date) };
    onSubmit(form);
  };

  return (
    <>
      <div className="columns">
        <div className="column">
          <h1 className="is-size-4">{title}</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="desc" className="label">
            Description
          </label>
          <div className="control">
            <input
              id="desc"
              type="text"
              className="input"
              autoComplete="off"
              placeholder="Amen Ramen"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <p className="help is-danger">You must provide a description</p>
        </div>
        <div className="field">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <div className="control">
            <input
              type="number"
              id="amount"
              className="input"
              placeholder="10.25"
              autoComplete="off"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <p className="help is-danger">You must provide a valid amount</p>
        </div>
        <div className="field">
          <label htmlFor="date" className="label">
            Date
          </label>
          <div className="control">
            <input
              type="date"
              name=""
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
              required
            />
          </div>
          <p className="help is-danger">You must provide a date</p>
        </div>
        <div className="field">
          <button type="submit" className="button is-primary">
            {children}
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
