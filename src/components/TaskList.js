import { useContext } from "react";
import Task from "./Task";
import { TaskListContext } from "../context/TaskListContext";
const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className="task">
      <ul>
        {tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};
export default TaskList;
