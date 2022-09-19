import React ,{useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    
    const amountChangeHandler=(event)=>{
        setEnteredAmmount(event.target.value);
    }
    
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
  s        <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="text" onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-13" />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
