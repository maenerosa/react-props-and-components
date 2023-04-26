import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <List items={["apple", "orange", "grapes", "banana", "mango"]} />
    </div>
  );
}

export default App;
