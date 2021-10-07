import { ADD_TASK } from "../constants/constants";

const addTask = (id, title) => {
    return {
        type: ADD_TASK,
        taskId: id,
        taskTitle: title,
        taskComplete: false
    };
};
export default addTask;