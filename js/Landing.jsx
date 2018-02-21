import React from 'react';
import Nav from './Nav';

const Landing = () => (
  <div className="landing">
    
    <Nav />

    <div className="blog-header">
      <div className="container">
        <h1 className="blog-title">The Bootstrap Blog</h1>
        <p className="lead blog-description">An example blog template built with Bootstrap.</p>
      </div>
    </div>
  </div>
);

export default Landing;
