// App.js
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Summary from "./components/summary";
import Buttons from "./components/buttons";
import Details from "./components/details";
import IncomeForm from "./components/incomeForm";
import ExpenseForm from "./components/expenseForm";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const categories = [
    "Food",
    "Housing",
    "Entertainment",
    "Transport",
    "Utilities",
  ];

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = e.target.name.value;
    setName(enteredName);
  };

  const addIncome = (amount) => {
    setIncome(income + amount);
    setShowIncomeForm(false); // Hide the form after submission
  };

  const addExpense = (category, amount) => {
    setExpenses([...expenses, { category, amount }]);
    setShowExpenseForm(false); // Hide the form after submission
  };

  if (!name) {
    return (
      <div className="container">
        <h1>Welcome to Budget Tracker</h1>
        <form className="nameForm" onSubmit={handleNameSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar name={name} />
      <Summary income={income} expenses={expenses} />
      <Buttons
        onSeeDetails={() => {
          setShowDetails(!showDetails);
          setShowIncomeForm(false);
          setShowExpenseForm(false);
        }}
        onAddIncome={() => {
          setShowIncomeForm(!showIncomeForm);
          setShowExpenseForm(false);
          setShowDetails(false);
        }}
        onAddExpense={() => {
          setShowExpenseForm(!showExpenseForm);
          setShowIncomeForm(false);
          setShowDetails(false);
        }}
      />
      {showDetails && <Details expenses={expenses} />}
      {showIncomeForm && <IncomeForm onAddIncome={addIncome} />}
      {showExpenseForm && (
        <ExpenseForm categories={categories} onAddExpense={addExpense} />
      )}
    </div>
  );
};

export default App;
