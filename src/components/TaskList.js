import React from 'react';
import Task from './Task';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </div>
  );
};

export default TaskList;
