import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title , setTitle ] = useState("");
  const [amount , setAmount] = useState("");
  const [date , setDate ] = useState("");
  // const [userInput, setuserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChanger = (e) => {
    setTitle(e.target.value)
    // setuserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
      // setuserInput((prevState)=> {
      //   return {...prevState , title : e.target.value }
      // })
  };
  const amountChanger = (e) => {
    setAmount(e.target.value)
    // setuserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };
  const dateChanger = (e) => {
    setDate(e.target.value)
    // setuserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title : title,
      amount : amount,
      date : new Date(date)
    }
    props.onSaveExpenseData(expenseData)
    setTitle("");
    setAmount("");
    setDate("");
  } 
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChanger} />
        </div> 
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChanger}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" max="2022-12-31" value={date} onChange={dateChanger} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
