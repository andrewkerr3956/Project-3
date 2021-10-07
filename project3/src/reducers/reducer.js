import { combineReducers } from "redux";
import {ADD_TASK, DELETE_TASK, TOGGLE_ACTIVE} from "../constants/constants";


const taskListData = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.task];          
        case DELETE_TASK:
            return state.splice(0, action.id, action.id + 1)
        case TOGGLE_ACTIVE:
            return (state.complete ? true : false);
        default:
            return state;
    } 
}


const reducer = combineReducers({taskListData});

export default reducer;