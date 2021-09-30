import './App.css';
import React from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Add React Router functionality later on */}
        <li><Link to="/todos">To-Do List</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

const ToDoList = () => {
  return (
    <div className="container">
      <div className="flex">
        
      </div>
    </div>
  )
} 

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <h2>React + Redux To-Do App</h2>
        <Navbar />
      </header>
      <Route path="/todos">
        <div className="form-container">
          <form>
            <input type="text" name="task-input" placeholder="Enter task..." />
            <button>Add Task</button>
          </form>
        </div>
        <ToDoList />
      </Route>
    </div>
    
    <Route path="/contact" />
    </BrowserRouter>
  );
}

export default App;
