import {ADD_TASK, DELETE_TASK, TOGGLE_ACTIVE} from "../constants/constants";

let initialData = [];

const taskListData = (state = initialData, action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.push(...state, action.task);          
        case DELETE_TASK:
            return state.splice(0, action.id, action.id + 1)
        case TOGGLE_ACTIVE:
            return (state.active ? true : false);
        default:
            return state;
    } 
}

export default taskListData;