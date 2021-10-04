import React, { useState } from 'react';
import TaskListContainer from '../containers/TaskListContainer';

const ToDoContent = () => {

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(true);

  const updateTaskName = (event) => {
    setTaskName(event.target.value);
  }

  const deleteTask = (event) => {
    let newListTasks = [];
    tasks.map( (task, idx) => {
      if( idx != event.target.id) {
        newListTasks.push(task);
      } 
    });
    setTasks(newListTasks);
  }

  /*
  const updateActive = (event) => {
    if(event.target.active) {
      setActive(false);
    }
    else {
      setActive(true);
    }
  }
  */

  const updateList = () => {
      if(tasks.includes(taskName)) {
        alert("Task already exists!");
      }
      else {
        setTasks([...tasks, taskName]);
      }
      
  }

  return (
    <div className="task-container">
      {/* <TaskListContainer /> */}
      <input type="text" name="task" value={taskName} onChange={updateTaskName} placeholder={"Enter task..."} />
      <button onClick={updateList}>Add Task</button> <br />
      <div className={"container-fluid"} style={{width: "500px", marginTop: "30px", display: "flex", flexFlow: "wrap row", background: "white"}}>
        {tasks && tasks.length > 0 && tasks.map( (task, idx) => {
          return (
            <ul style={{justifyContent: "space-between", textAlign: "left", listStyleType: "none", background: "gray", borderBottom: "2px solid rgba(0,0,0,0.8)", width: "500px", padding: "15px"}}>
              <li key={idx}>
                <input type="checkbox" id={idx} className="flex-item"/>
                <span className="flex-item"><strong>{task}</strong></span>
                <button id={idx} onClick={deleteTask}>X</button>
              </li>
              </ul>
          )
          
        })}
        
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