import React from "react";
const Task = ({ task }) => {
  return (
    <div>
      <li>
        <span>{task.text}</span>
        <span>{task.day}</span>
      </li>
    </div>
  );
};
export default Task;
