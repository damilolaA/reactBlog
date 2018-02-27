import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = props => {
  return (
    <div className="blog-post">
      <Link to={`/post/${props.post._id}`}>
        <h2 className="blog-post-title">{props.post.title}</h2>
      </Link>
      <p className="blog-post-meta">
        {props.post.date} by <a href="#">{props.post.author}</a>
      </p>
      <p>{props.post.post}</p>
    </div>
  );
};

export default PostItem;
