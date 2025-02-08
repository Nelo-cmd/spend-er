// components/Summary.js
import React from "react";

const Summary = ({ income, expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Net Balance: ${income - totalExpenses}</p>
    </div>
  );
};

export default Summary;
