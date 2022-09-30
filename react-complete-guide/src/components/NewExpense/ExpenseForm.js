import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // // setUserInput({
    // //   ...userInput,  // so will not lose previous state data
    // //   enteredTitle: event.target.value,
    // // }); // this aproach: React does not guarantee latest snapshot state.

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};  // React does guarantee latest state.So you should state update when your state update depend prev. state
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // default javascript behaviour.Page can not reload.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onFromSubmitAction(expenseData);
    setEnteredTitle("");
    setEnteredAmmount("");
    setEnteredDate("");
   
  };
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="text"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2022-12-13"
            />
          </div>
        </div>
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit">Add Expense</button>      
    </form>
  );
};

export default ExpenseForm;
