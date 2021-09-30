import { combineReducers } from "redux";
import AddTask from "../actions/addTask";
import DeleteTask from "../actions/deleteTask";
import ToggleActive from "../actions/toggleActive";

const reducer = combineReducers({
    AddTask,
    DeleteTask,
    ToggleActive
});

export default reducer;