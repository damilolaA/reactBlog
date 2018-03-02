import React from 'react';
import { render } from 'react-dom';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const SinglePost = props => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 blog-main">
            <div className="blog-post">
              <h2 className="blog-post-title">{props.title}</h2>
              <p className="blog-post-meta">
                {props.date} by <a href="#">{props.author}</a>
              </p>
              <p>{props.post}</p>
            </div>
            <div>
              <h3 className="header">Add your comment</h3>
              <form className="comment">
                <textarea className="text-field" placeholder="write something" />
                <br />
                <button className="def-button post-comment">Upload comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePost;
