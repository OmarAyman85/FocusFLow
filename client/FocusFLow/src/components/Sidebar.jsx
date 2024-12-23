// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-4">
      <ul>
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/tasks" className="text-white">Tasks</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white">Profile</Link>
        </li>
        <li>
          <Link to="/settings" className="text-white">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
