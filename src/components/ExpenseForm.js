import React from "react";
import { useForm } from "../hooks/form";

const ExpenseForm = ({ title, onSubmit, children, expense }) => {
  const {
    fields,
    isValid,
    setDescription,
    setAmount,
    setDate,
    handleBlur,
  } = useForm(expense);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      description: fields.description.value,
      amount: +fields.amount.value,
      date: new Date(fields.date.value),
    };
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
              value={fields.description.value}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={() => handleBlur("description")}
              required
            />
          </div>
          {fields.description.touched && !fields.description.valid && (
            <p className="help is-danger">You must provide a description</p>
          )}
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
              value={fields.amount.value}
              onChange={(e) => setAmount(e.target.value)}
              onBlur={() => handleBlur("amount")}
              required
            />
          </div>
          {fields.amount.touched && !fields.amount.valid && (
            <p className="help is-danger">You must provide a valid amount</p>
          )}
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
              value={fields.date.value}
              onChange={(e) => setDate(e.target.value)}
              onBlur={() => handleBlur("date")}
              className="input"
              required
            />
          </div>
          {fields.date.touched && !fields.date.valid && (
            <p className="help is-danger">You must provide a date</p>
          )}
        </div>
        <div className="field">
          <button
            type="submit"
            className="button is-primary"
            disabled={!isValid}
          >
            {children}
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
