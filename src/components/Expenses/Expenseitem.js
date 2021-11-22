import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle(title + 2);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}zł</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;