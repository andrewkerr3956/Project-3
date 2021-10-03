import React, { useState } from 'react';
import TaskListContainer from '../containers/TaskListContainer';

const ToDoContent = () => {

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const updateTaskName = (event) => {
    setTaskName(event.target.value);
  }

  const updateList = () => {
    setTasks([...tasks, taskName]);
  }

  return (
    <div className="task-container">
      {/* <TaskListContainer /> */}
      <input type="text" name="task" value={taskName} onChange={updateTaskName} placeholder={"Enter task..."} />
      <button onClick={updateList}>Add Task</button> <br />
      <div className="container-fluid" style={{width: "500px", marginTop: "30px", display: "flex", background: "gray"}}>
        <ul>
        {tasks && tasks.length > 0 && tasks.map( (task, idx) => {
          return <li key={idx} style={{flexBasis: "100%"}}>{task}</li>
        })}
        </ul>
      </div>
      <div style={{marginTop: "50px"}}>
        <button>Show All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export { ToDoContent };