//=======================================
//=======================================
//*************S t a t e F u l********* =
//=======================================
//=======================================

import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [valTitle, SetTitle] = useState("");
  const [valPrice, SetPrice] = useState("");
  const [valDate, SetDate] = useState("");
  //************* */
  // const [userInput, SetUserInput] = useState({
  //   Title: "",
  //   Price: "",
  //   Date: "",
  // });
  const TitleChangeText = (event) => {
    // SetUserInput({
    //   ...userInput,
    //   Title: event.target.value,
    // });
    //--------
    // SetUserInput((userInput) => {
    //   return { ...userInput, Title: event.target.value };
    // });
    //---------
    SetTitle(event.target.value);
    // console.log(Title);
  };
  const PriceChangeText = (event) => {
    // SetUserInput({
    //   ...userInput,
    //   Price: event.target.value,
    // });
    //--------
    // SetUserInput((userInput) => {
    //   return { ...userInput, Price: event.target.value };
    // });
    // SetTitle(event.target.value);
    // console.log(userInput);

    //----------
    SetPrice(event.target.value);
  };
  const DateChangeText = (event) => {
    // SetTitle(event.target.value);
    // SetUserInput({
    //   ...userInput,
    //   Date: event.target.value,
    // });
    //--------
    // SetUserInput((userInput) => {
    //   return { ...userInput, Date: event.target.value };
    // });
    //----------
    SetDate(event.target.value);
    // console.log(Date);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const DataValues = {
      title: valTitle,
      price: valPrice,
      date: new Date(valDate),
    };
    // console.log(`Title=${valTitle}\n Price=${valPrice}\n Date=${valDate}`);
    // console.log(DataValues);
    SetTitle("");
    SetPrice("");
    SetDate("");
    props.OnExspensSave(DataValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={valTitle} onInput={TitleChangeText} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={valPrice}
            onChange={PriceChangeText}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={valDate}
            onChange={DateChangeText}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
