import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl">Welcome to FocusFlow!</h1>
        <p>This is your task management app.</p>
      </main>
    </div>
  );
};

export default HomePage;
