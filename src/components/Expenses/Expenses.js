import React, { useState } from "react";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpanses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} displayFilteredYear={filterChangeHandler} />
        {filteredExpanses.map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)}
      </Card>
    </div>
  )
}

export default Expenses;