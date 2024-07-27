import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <h1>Task Manager</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
