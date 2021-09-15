import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task};
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  };

  return (
    <div className="container">
      <Header />
      <AddTask handleAddTask={ handleAddTask }/>
      { tasks.length > 0 ?
        <Tasks
          tasks={ tasks }
          handleDelete={ handleDelete }
          handleToogle={ handleToggle }
        />
        : <h5 style={{ color: 'blue' }}>No tasks to show</h5>
      }
    </div>
  );
}

export default App;
