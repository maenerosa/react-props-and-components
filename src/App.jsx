import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Wake up!", "Code", "Sleep"]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "") return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   const API = "https://api.quotable.io/quotes/random";
//   const [quote, setQuote] = useState(null);

//   useEffect(() => {
//     async function fetchQuote() {
//       const response = await fetch(API);
//       const data = await response.json();

//       setQuote(data);
//     }

//     fetchQuote();
//   }, []);

//   if (quote === null) {
//     return <p>Loading random quote data...</p>;
//   }

//   return <div>{quote[0].content}</div>;
// }

// export default App;
