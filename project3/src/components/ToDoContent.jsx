import React, { useState } from 'react';
import addTask from '../actions/addTask';
import TaskListContainer from '../containers/TaskListContainer';

const ToDoContent = () => {

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [holdTasks, setHoldTasks] = useState([]);

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
    setTasks(newArray);

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
    if (holdTasks.length > 0) {
      setTasks(holdTasks);
    }
    setHoldTasks([]);
  }

  // Show active only
  const showActive = async () => {
    let activeArray = [];
    if (holdTasks.length > 0) {
      for (let i = 0; i < holdTasks.length; i++) {
        if (!holdTasks[i].completed) {
          activeArray.push(holdTasks[i]);
        }
      }
    }
    else {
      for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].completed) {
          activeArray.push(tasks[i]);
        }
      }
      setHoldTasks(tasks);
    }
    // Use the holdTasks state to preserve the original tasks array.

    // Manipulate the tasks array to hold only the active tasks.
    setTasks(activeArray)

  }

  // Show completed only
  const showCompleted = async () => {
    let completedArray = [];
    if (holdTasks.length > 0) {
      for (let i = 0; i < holdTasks.length; i++) {
        if (holdTasks[i].completed) {
          completedArray.push(holdTasks[i]);
        }
      }
    }
    else {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
          completedArray.push(tasks[i]);
        }
      }
      setHoldTasks(tasks);
    }
    // Use the holdTasks state to preserve the original tasks array.

    // Manipulate the tasks array to hold only the completed tasks.
    setTasks(completedArray)
  }


  return (
    <div className="container">
      <div className="task-container">
        {/* <TaskListContainer /> */}
        <input type="text" name="task" value={taskName} onChange={updateTaskName} placeholder={"Enter task..."} />
        <button onClick={addTask}>Add Task</button> <br />
        <div className="container-fluid" style={{marginTop: "30px", background: "white" }}>
          <ul style={{marginLeft: "275px", textAlign: "left", listStyleType: "none", background: "gray", borderBottom: "2px solid rgba(0,0,0,0.8)", width: "50%", padding: "15px"}}>
            {tasks && tasks.length > 0 && tasks.map((task, idx) => {
              return (
                <li style={{ marginTop: "10px" }} key={idx}>
                  <input style={{ marginRight: "20px" }} type="checkbox" onChange={(event) => updateActive(event, idx)} id={idx} className="flex-item" />
                  <span><strong>{task.name}</strong></span>
                  <button className={"float-right"} id={idx} onClick={deleteTask}>X</button>
                </li>
              )
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