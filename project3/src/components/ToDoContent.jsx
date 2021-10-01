import { useState, setState } from "react";

const ToDoContent = (props) => {

    const [taskName, setTaskName] = useState('');

    const updateTaskText = async(event) => {
        console.log(event.target.value);
        setTaskName(event.currentTarget.value);
    }

    return (
      <div className="task-container">
        <input type="text" name="task" value={taskName} onChange={updateTaskText} placeholder={"Enter task..."} />
        <button onClick={() => props.onSubmit(props.taskId, taskName)}>Add Task</button> <br />
        {taskName}
      </div>
    )
}

export default ToDoContent;