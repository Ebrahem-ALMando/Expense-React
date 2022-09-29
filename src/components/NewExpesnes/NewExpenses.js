//=======================================
//=======================================
//*************S t a t e Less********* =
//=======================================
//=======================================

import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const SaveExspensHandler = (NewExpenseData) => {
    // const SendData = () => {};
    const ExpenseData = {
      id: Math.random().toString(),
      ...NewExpenseData,
    };
    props.GetData(ExpenseData);
    // console.log("Printed From New Expense", ExpenseData);
  };

  return (
    <div className="new-expense">
      <h2> Add New Expense </h2>{" "}
      <ExpenseForm OnExspensSave={SaveExspensHandler} />{" "}
    </div>
  );
};

export default NewExpenses;
