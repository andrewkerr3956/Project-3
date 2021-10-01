import { TOGGLE_ACTIVE } from "../constants/constants";

const toggleActive = (id, active) => {
    return {
        type: TOGGLE_ACTIVE,
        taskId: id,
        task: {
            taskActive: active
        }
    };
};
export default toggleActive;