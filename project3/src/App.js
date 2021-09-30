import './App.css';
import React from 'react';
import { NavLink, Link, Route, BrowserRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Add React Router functionality later on */}
        <li><NavLink to="/todos">To-Do List</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

const ToDoList = () => {
  return (
    <div className="container">
      <div className="todo-container">
        <h2>Add items to your To-Do list!</h2>
      </div>
    </div>
  )
}

const ToDoContent = () => {
  return (
    <div className="task-container">
      <input type="text" name="task" placeholder="Enter task..." />
      <button>Add Task</button>
      <ToDoList />
    </div>
    /*
    <div className="container">
      <div className="flex">

      </div>
    </div>
    */
  )
}

const ContactContent = () => {
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

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>React + Redux To-Do App</h2>
        <Navbar />
      </header>
      <Route path="/todos" component={ToDoContent} />
      <Route path="/contact" component={ContactContent} />
    </BrowserRouter >
  );
}

export default App;
