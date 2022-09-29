import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter.jsx";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
const Expense = (props) => {
  const [DateYeared, SetDateYear] = useState("2022");
  const ChangeDateHandler = (DateYear) => {
    SetDateYear(DateYear);
    console.log(DateYear);
  };
  const FilterbyYear = props.products.filter((expense) => {
    return expense.date.getFullYear().toString() == DateYeared;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={DateYeared} onChangeFilter={ChangeDateHandler} />
      <ExpenseChart DataExpense={FilterbyYear} />
      <ExpenseList Filter={FilterbyYear} />
      {/* <ExpenseItem
        title={props.products[0].title}
        price={props.products[0].price}
        date={props.products[0].date}
      />
      <ExpenseItem
        title={props.products[1].title}
        price={props.products[1].price}
        date={props.products[1].date}
      />
      <ExpenseItem
        title={props.products[2].title}
        price={props.products[2].price}
        date={props.products[2].date}
      />
      <ExpenseItem
        title={props.products[3].title}
        price={props.products[3].price}
        date={props.products[3].date}
      /> */}
    </Card>
  );
};
export default Expense;
