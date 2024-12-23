import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">FocusFlow</h1>
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
