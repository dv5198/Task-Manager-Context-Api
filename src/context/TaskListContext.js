import React from "react";
import { useState } from "react";
import uuid from "uuid";
const TaskListContext = React.createContext();
const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Vikas Birthday Celebration",
      day: "dec 11th at 03:00pm",
      remainder: "true"
    },
    {
      id: 2,
      text: "Food Festival Visit",
      day: "Jan 07th at 03:00pm",
      remainder: "false"
    },
    {
      id: 3,
      text: "React Assignmant Submission",
      day: "dec 17th at 11:59pm",
      remainder: "true"
    },
    {
      id: 4,
      text: "Hackerrank Coding Competition",
      day: "feb 02nd at 12:00pm",
      remainder: "true"
    },
    {
      id: 5,
      text: "Financial Awareness Webinar",
      day: "jan 05th at 06:00pm",
      remainder: "true"
    }
  ]);
  //Add Task
  const addTask = (text) => {
    setTasks([...tasks, { text, id: uuid() }]);
  };
  return (
    <div>
      <TaskListContext.Provider value="{{tasks,addTask}}">
        {props.childern}
      </TaskListContext.Provider>
    </div>
  );
};
export default TaskListContextProvider;
export { TaskListContext };
