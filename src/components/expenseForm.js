// components/ExpenseForm.js
import React, { useState } from "react";

const ExpenseForm = ({ categories, onAddExpense }) => {
  const [expenseCategory, setExpenseCategory] = useState(categories[0]);
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleAddExpense = () => {
    onAddExpense(expenseCategory, parseFloat(expenseAmount));
    setExpenseCategory(categories[0]);
    setExpenseAmount(0);
  };

  return (
    <div className="forms" id="expenseform">
      <h3>Add Expense</h3>
      <select
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
