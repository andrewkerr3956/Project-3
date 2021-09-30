const ADD_TASK = "ADD_TASK";

const AddTask = (id, title, active) => {
    return {
        type: ADD_TASK,
        taskId: id,
        task: {
            taskTitle: title,
            taskActive: active
        }
    };
};
export default AddTask;