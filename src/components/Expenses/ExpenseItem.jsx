import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, SetNewTitle] = useState(props.title);
  // const [date, SetNewDate] = useState(props.date);
  // const [price, SetNewPrice] = useState(props.price);

  // let Title = props.title;
  // const ClickHandler = () => {
  //   const datenew = new Date(2019, 1, 15);
  //   SetNewTitle("Update Value is Title");
  //   SetNewDate(datenew);
  //   SetNewPrice(200);
  //   // console.log("Clicked", title);
  // };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> $ {props.price} </div>
      </div>
      {/* <button className="btn" onClick={ClickHandler}>
        Change
      </button> */}
    </Card>
  );
};
export default ExpenseItem;
