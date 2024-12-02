import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">
          <Link to="/">BLOG SPACE</Link>
        </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/new-post">New Post</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
