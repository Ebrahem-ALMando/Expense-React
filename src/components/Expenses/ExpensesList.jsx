import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.Filter.length === 0) {
    return <h1 className="ClsH1">Not Found</h1>;
  }
  return (
    <div>
      {props.Filter.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
      ;
    </div>
  );
};

export default ExpenseList;
