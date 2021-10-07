import React, { useState } from 'react';
import addTask from '../actions/addTask';
import TaskListContainer from '../containers/TaskListContainer';

const ToDoContent = () => {

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("All");

  // Handle the changing value of the task name.
  const updateTaskName = async (event) => {
    setTaskName(event.target.value);
  }

  // Delete the task at the index supplied, then map out the new list.
  const deleteTask = async (event) => {
    let newListTasks = [];
    tasks.map((task, idx) => {
      if (idx != event.target.id) {
        newListTasks.push(task);
      }
    });
    setTasks(newListTasks);
  }

  // Update the task's "active" status between active and completed.
  const updateActive = async (event, idx) => {
    let newArray = tasks;
    newArray[idx].completed = event.target.checked;
    setTasks([...tasks]);
  }

  // Check if the task list already includes the task name or not.
  const addTask = async () => {
    // This variable will check if the taskName is unique.
    let uniqueStatus = true;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name == taskName) {
        alert("Task is already included on the list!");
        uniqueStatus = false;
      }
    }
    if (uniqueStatus) {
      if (!taskName == "") {
        setTasks([...tasks, { name: taskName, completed: false }]);
        setTaskName("");
      }
      else {
        alert("Task must have a name!");
      }
    }
    else {

    }

  }

  /* FILTER VIEWS */

  // No filter
  const showAll = async () => {
    setView("All");
  }

  // Show active only
  const showActive = async () => {
    setView("Active");
  }

  // Show completed only
  const showCompleted = async () => {
    setView("Completed");

  }


  return (
    <div className="container">
      <div className="task-container">
        {/* <TaskListContainer /> */}
        <input type="text" name="task" value={taskName} onChange={updateTaskName} placeholder={"Enter task..."} />
        <button onClick={addTask}>Add Task</button> <br />
        <div className="container-fluid" style={{ marginTop: "30px", background: "white" }}>
          <ul style={{ marginLeft: "275px", textAlign: "left", listStyleType: "none", background: "gray", borderBottom: "2px solid rgba(0,0,0,0.8)", width: "50%", padding: "15px" }}>
            {tasks && tasks.length > 0 && view === "All" && tasks.map((task, idx) => {
              return (
                <li style={{ marginTop: "10px", paddingBottom: "10px", borderBottom: "2px solid #909090" }} key={idx}>
                  <input style={{ marginRight: "20px" }} type="checkbox" onChange={(event) => updateActive(event, idx)} checked={task.completed} className="flex-item" />
                  <span><strong>{task.name}</strong></span>
                  <i className={"fa fa-trash text-danger float-right"} id={idx} onClick={deleteTask}></i>
                </li>
              )
            })}
            {tasks && tasks.length > 0 && view === "Active" && tasks.map((task, idx) => {
              if (task.completed === false) {
                return (
                  <li style={{ marginTop: "10px", paddingBottom: "10px", borderBottom: "2px solid #909090" }} key={idx}>
                    <input style={{ marginRight: "20px" }} type="checkbox" onChange={(event) => updateActive(event, idx)} checked={task.completed} className="flex-item" />
                    <span><strong>{task.name}</strong></span>
                    <i className={"fa fa-trash text-danger float-right"} id={idx} onClick={deleteTask}></i>
                  </li>
                )
              }
              else {

              }
            })}
            {tasks && tasks.length > 0 && view === "Completed" && tasks.map((task, idx) => {
              if (task.completed === true) {
                return (
                  <li style={{ marginTop: "10px", paddingBottom: "10px", borderBottom: "2px solid #909090" }} key={idx}>
                    <input style={{ marginRight: "20px" }} type="checkbox" onChange={(event) => updateActive(event, idx)} checked={task.completed} className="flex-item" />
                    <span><strong>{task.name}</strong></span>
                    <i className={"fa fa-trash text-danger float-right"} id={idx} onClick={deleteTask}></i>
                  </li>
                )
              }
              else {

              }
            })}
          </ul>

        </div>
        <div style={{ marginTop: "50px" }}>
          <button className="toggle-button" onClick={showAll}>Show All</button>
          <button className="toggle-button" onClick={showActive}>Active</button>
          <button className="toggle-button" onClick={showCompleted}>Completed</button>
        </div>
      </div>
    </div>
  )
}


export { ToDoContent };