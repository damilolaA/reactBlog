import React from 'react';

const SideBar = () => (
  <div className="col-sm-3 offset-sm-1 blog-sidebar">
    <div className="sidebar-module sidebar-module-inset">
      <h4>About</h4>
      <p>
        This blog is committed to posting relevant articles and information relating to programming,
        web development, and the tech community in Nigeria.
      </p>
    </div>
    <div className="sidebar-module">
      <h4>Archives</h4>
      <ol className="list-unstyled">
        <li>
          <a href="#">March 2014</a>
        </li>
        <li>
          <a href="#">February 2014</a>
        </li>
        <li>
          <a href="#">January 2014</a>
        </li>
        <li>
          <a href="#">December 2013</a>
        </li>
        <li>
          <a href="#">November 2013</a>
        </li>
        <li>
          <a href="#">October 2013</a>
        </li>
        <li>
          <a href="#">September 2013</a>
        </li>
        <li>
          <a href="#">August 2013</a>
        </li>
        <li>
          <a href="#">July 2013</a>
        </li>
        <li>
          <a href="#">June 2013</a>
        </li>
        <li>
          <a href="#">May 2013</a>
        </li>
        <li>
          <a href="#">April 2013</a>
        </li>
      </ol>
    </div>
    <div className="sidebar-module">
      <h4>Elsewhere</h4>
      <ol className="list-unstyled">
        <li>
          <a href="https://github.com/damilolaA">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/@justdamilolo">Twitter</a>
        </li>
        <li>
          <a href="https://facebook.com/">Facebook</a>
        </li>
      </ol>
    </div>
  </div>
);

export default SideBar;
