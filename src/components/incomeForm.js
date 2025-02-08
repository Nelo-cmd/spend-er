// components/IncomeForm.js
import React, { useState } from "react";

const IncomeForm = ({ onAddIncome }) => {
  const [incomeAmount, setIncomeAmount] = useState(0);

  const handleAddIncome = () => {
    onAddIncome(parseFloat(incomeAmount));
    setIncomeAmount(0);
  };

  return (
    <div className="forms" id="incomeform">
      <h3>Add Income</h3>
      <input
        type="number"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default IncomeForm;
