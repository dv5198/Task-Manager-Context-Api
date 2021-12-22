import "./styles.css";
import { TaskList } from "./components/TaskList";
import { TaskListContextProvider } from "./context/TaskListContext";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
export default function App() {
  return (
    <TaskListContextProvider>
      <Header />
      <div className="container">
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}
