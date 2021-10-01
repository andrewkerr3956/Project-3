import { connect } from 'react-redux';
import addTask from '../actions/addTask'; 
import ToDoContent from '../../components/ToDoContent.jsx';

const mapStateToProps = (state) => {
    return {
        taskId: state.id,
        task: {
            taskTitle: state.taskTitle,
            taskActive: state.taskActive
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, task) => {
            console.log(id, task);
            dispatch(addTask(id, task));
        }
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoContent);

export default TaskListContainer;