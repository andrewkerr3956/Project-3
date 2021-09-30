const DELETE_TASK = "DELETE_TASK";

const DeleteTask = (id) => {
    return {
        type: DELETE_TASK,
        taskId: id,
    };
};
export default DeleteTask;