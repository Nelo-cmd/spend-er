// components/Details.js
import React from "react";

const Details = ({ expenses, isOpen }) => {
  return (
    <div className={`details ${isOpen ? "open" : ""}`}>
      <h2>Expense Details</h2>
      {expenses.length === 0 ? (
        <h4>You have no expenses yet.</h4>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <strong>{expense.category}</strong>: ${expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Details;
