import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Import the CSS file here


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create-Article">Create Article</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
