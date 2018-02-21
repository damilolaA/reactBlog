import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="blog-masthead">
    <div className="container">
      <nav className="nav blog-nav">
        <Link className="nav-link active" to="#">
          Home
        </Link>
        <Link className="nav-link" to="#">
          New features
        </Link>
        <Link className="nav-link" to="#">
          Press
        </Link>
        <Link className="nav-link" to="#">
          New hires
        </Link>
        <Link className="nav-link" to="#">
          About
        </Link>
      </nav>
    </div>
  </div>
);

export default Nav;
