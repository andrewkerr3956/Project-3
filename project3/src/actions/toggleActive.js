import { TOGGLE_ACTIVE } from "../constants/constants";

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