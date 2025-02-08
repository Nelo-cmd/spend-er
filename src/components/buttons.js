// components/Buttons.js
import React from "react";

const Buttons = ({ onSeeDetails, onAddIncome, onAddExpense }) => {
  return (
    <div className="buttons">
      <button onClick={onSeeDetails}>See Details</button>
      <button onClick={onAddIncome}>Add Income</button>
      <button onClick={onAddExpense}>Add Expense</button>
    </div>
  );
};

export default Buttons;
