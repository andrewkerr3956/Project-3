import { connect } from 'react-redux';
import { ToDoContent } from '../components/ToDoContent';
import addTask from '../actions/addTask'; 


const mapStateToProps = (state) => {
    return {
        taskId: state.id,
        taskTitle: state.taskTitle,
        taskActive: state.taskComplete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id, task) => {
            console.log(id, task);
            dispatch(addTask(id, task));
        }
    }
}

/*
const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoContent);

export default TaskListContainer;
*/