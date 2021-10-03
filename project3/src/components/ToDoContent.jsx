import React from 'react';
import TaskListContainer from '../containers/TaskListContainer';

const ToDoContent = () => {

    return (
        <div className="task-container">
          {/* <TaskListContainer /> */}
          <input type="text" name="task" placeholder={"Enter task..."} />
          <button>Add Task</button> <br />
        </div>
      )
}

export {ToDoContent};