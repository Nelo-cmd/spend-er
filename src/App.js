import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const enteredName = e.target.name.value;
    setName(enteredName);
  };

  if (!name) {
    return (
      <div>
        <h1>Welcome to Budget Tracker</h1>
        <form onSubmit={handleNameSubmit}>
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

  return <div className="App"></div>;
}

export default App;
