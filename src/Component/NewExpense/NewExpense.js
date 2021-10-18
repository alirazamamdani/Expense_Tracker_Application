import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    const expensedetail = {
      ...expenseData,
      id: Math.random().toString()    
    }
    props.onAddExpense(expensedetail)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  );
};

export default NewExpense;
