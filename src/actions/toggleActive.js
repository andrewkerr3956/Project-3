import { TOGGLE_ACTIVE } from "../constants/constants";

const toggleActive = (id, active) => {
    return {
        type: TOGGLE_ACTIVE,
        taskId: id,
        task: {
            taskComplete: active
        }
    };
};
export default toggleActive;