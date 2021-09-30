const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

const ToggleActive = (id, active) => {
    return {
        type: TOGGLE_ACTIVE,
        taskId: id,
        task: {
            taskActive: active
        }
    };
};
export default ToggleActive;