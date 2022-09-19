import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredData, setFilteredExpenses] = useState(props.expenses);
  const [filteredYear,setFilteredYear] = useState('2020');
 
  const filterByYear = (year) => {
    const filteredExpenses = props.expenses.filter((item) => {
      return item.date.getFullYear() == year;
    });
    setFilteredExpenses(filteredExpenses);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterByYear={filterByYear} />
      {filteredData.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
