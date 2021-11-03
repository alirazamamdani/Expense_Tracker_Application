import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpenseChart from '../Expenses/ExpenseChart'
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filerHandlerChange = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filerHandlerChange}
      />
      <ExpenseChart expense={filterExpense}/>
      <ExpenseList items={filterExpense} />
    </Card>
  );
};

export default Expenses;
