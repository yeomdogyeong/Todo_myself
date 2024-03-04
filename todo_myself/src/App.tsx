import "./App.css";
import { TodoComponent } from "./components/TodoComponent";
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      Todos
      <TodoComponent />
    </div>
  );
}

export default App;
