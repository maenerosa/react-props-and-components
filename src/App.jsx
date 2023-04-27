import "./App.css";
import List from "./components/List";

function App() {
  const todos = [
    "Learn React",
    "Learn Redux",
    "Learn GraphQL",
    "Learn MongoDB",
    "Learn NodeJS",
    "Learn Express",
    "Learn AWS",
  ];

  return (
    <div className="container">
      <List items={todos} />
    </div>
  );
}

export default App;
