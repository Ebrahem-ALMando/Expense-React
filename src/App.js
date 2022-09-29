import "./App.css";
import NewExpenses from "./components/NewExpesnes/NewExpenses";
import Expense from "./components/Expenses/Expenses";
import react, { useState } from "react";
const INITAL_EXPENSE = [
  {
    id: "e1",
    title: "BMW Car",
    price: 2000,
    date: new Date(2022, 9, 15),
  },
  {
    id: "e2",
    title: "Tesla Car",
    price: 3000,
    date: new Date(2021, 1, 15),
  },
  {
    id: "e3",
    title: "Audi Car",
    price: 5000,
    date: new Date(2021, 1, 15),
  },
  {
    id: "e4",
    title: "Kia Car",
    price: 1000,
    date: new Date(2020, 7, 15),
  },
];
const App = () => {
  const [Expenses, SetExpenses] = useState(INITAL_EXPENSE);
  const GetDataFromNewExpense = (Data) => {
    // SetExpenses([Data, ...Expenses]);
    SetExpenses((PrveStute) => [Data, ...PrveStute]);

    // console.log("App js", Data);
  };
  return (
    <div>
      <NewExpenses GetData={GetDataFromNewExpense} />
      <Expense products={Expenses} />
      {/* <div style={{ color: "red" }}>Heloo My is Name Ebrahem</div> */}
    </div>
  );
};

export default App;
// return React.createElement("div", { className: "App" }, "Hello World!");
// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h3", {}, "Hello World!"),
//   React.createElement("h3", {}, "Hello mohamd")
// );
