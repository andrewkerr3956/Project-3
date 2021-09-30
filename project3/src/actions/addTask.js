import { ADD_TASK } from "../constants/constants";

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