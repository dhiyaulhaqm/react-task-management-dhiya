import React from 'react';
import '../styles/Task.css';

const Task = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Uncomplete' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
