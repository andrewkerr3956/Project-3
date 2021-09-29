import './App.css';
// import {Link, Route, BrowserRouter} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>To-Do List</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div>
      <header>
        <h2>React + Redux To-Do App</h2>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
