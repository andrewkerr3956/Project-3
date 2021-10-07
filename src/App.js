import './App.css';
import React from 'react';
import { NavLink, Route, BrowserRouter, Redirect } from 'react-router-dom';
// import { addTask } from "./actions/addTask";
// import {deleteTask} from "./actions/deleteTask";
// import {toggleActive} from "./actions/toggleActive";
// import { reducer } from "./reducers/reducer";
// import {TaskListContainer} from './containers/TaskListContainer';
import  {ToDoContent}  from './components/ToDoContent.jsx';
import {ContactContent} from './components/ContactContent.jsx';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink className="navLink" to="/todos">To-Do List</NavLink></li>
        <li><NavLink className="navLink" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

/*
const ToDoContent = (props) => {

  const [taskName, setTaskName] = useState('');

  const updateTaskText = async(event) => {
      console.log(event.target.value);
      setTaskName(event.target.value);
  }

  const handleClick = async(event) => {
    
    console.log(props.taskName);
  }

  return (
    <div className="task-container">
      <input type="text" name="task" value={taskName} onChange={updateTaskText} placeholder={"Enter task..."} />
      <button onClick={handleClick}>Add Task</button> <br />
    </div>
  )
}
*/

/*
const ContactContent = () => {

  // Contact component will handle it's own state.
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [comment, setComment] = useState("");

  return (
    <div className="container">
      <div className="form-container">
        <form className="container-fluid">
          <label for="firstName">First Name</label> <br />
          <input type="text" name="firstName" />
          <p />
          <label for="lastName">Last Name</label> <br />
          <input type="text" name="lastName" />
          <p />
          <label for="email">E-Mail Address</label> <br />
          <input type="email" name="email" />
          <p />
          <label for="comments">Comments</label> <br />
          <textarea></textarea>
          <p />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
*/


function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>React + Redux To-Do App</h2>
        <Navbar />
      </header>
      <main>
        <Route path="/todos" component={ToDoContent} />
        <Route path="/contact" component={ContactContent} />
      </main>
      <Redirect to="/todos" />
    </BrowserRouter >
  );
}

export default App 

