import { useEffect, useState } from "react";
import { format } from "date-fns";

const parseDate = (date) => {
  return format(date, "yyyy-MM-dd");
};

const isEmpty = (value) => String(value).trim() === "";

export const useForm = (expense) => {
  const description = expense?.description || "";
  const amount = expense?.amount || "";
  const date = expense?.date ? parseDate(expense.date) : "";

  const values = {
    description: {
      value: description,
      touched: false,
      valid: !isEmpty(description),
    },
    amount: {
      value: amount,
      touched: false,
      valid: !isEmpty(amount),
    },
    date: {
      value: date,
      touched: false,
      valid: !isEmpty(date),
    },
  };

  const [fields, setFields] = useState(values);
  const [isValid, setValidity] = useState(true);

  const handleBlur = (key) =>
    setFields({
      ...fields,
      [key]: { ...fields[key], touched: true },
    });

  useEffect(() => {
    const validity = Object.values(fields)
      .map((field) => field.valid)
      .reduce((a, b) => a && b);
    setValidity(validity);
  }, [fields]);

  return {
    fields,
    isValid,
    handleBlur,
    setDescription: (value) =>
      setFields({
        ...fields,
        description: { value, touched: true, valid: !isEmpty(value) },
      }),
    setAmount: (value) =>
      setFields({
        ...fields,
        amount: { value, touched: true, valid: !isEmpty(value) },
      }),
    setDate: (value) =>
      setFields({
        ...fields,
        date: { value, touched: true, valid: !isEmpty(value) },
      }),
  };
};
