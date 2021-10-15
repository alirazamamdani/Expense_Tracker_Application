import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [title , setTitle ] = useState("");
  // const [amount , setAmount] = useState("");
  // const [date , setDate ] = useState("");
  const [userInput, setuserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChanger = (e) => {
    setuserInput({
      ...userInput,
      title: e.target.value,
    });
  };
  const amountChanger = (e) => {
    setuserInput({
      ...userInput,
      amount: e.target.value,
    });
  };
  const dateChanger = (e) => {
    setuserInput({
      ...userInput,
      date: e.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChanger} />
        </div> 
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChanger}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" max="2022-12-31" onChange={dateChanger} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
