import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filerHandlerChange = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <div className="error">No Expense Found</div>;

  if(filterExpense.length > 0) {
    expenseContent = filterExpense.map((expenseItem) => (
      <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filerHandlerChange}
      />
      {expenseContent}
      {/* {filterExpense.length === 0 ? (
        <div className="error">No Expense Found</div>
      ) : (
        filterExpense.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
