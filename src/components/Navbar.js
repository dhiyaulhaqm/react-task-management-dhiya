import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tasks">Tasks</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
