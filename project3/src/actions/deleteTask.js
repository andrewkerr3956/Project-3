import { DELETE_TASK } from "../constants/constants";

const DeleteTask = (id) => {
    return {
        type: DELETE_TASK,
        taskId: id,
    };
};
export default DeleteTask;