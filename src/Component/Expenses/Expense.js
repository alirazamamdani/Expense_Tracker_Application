import React , {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expense.css'


const Expenses = (props) => {
  const [filterYear , setFilterYear] = useState('2020')

  const filerHandlerChange = (filterYear) => {
    setFilterYear(filterYear)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filerHandlerChange}/>
      {props.items.map(expenseItem => <ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date}/>)}
 
    </Card>
  );
};

export default Expenses;
