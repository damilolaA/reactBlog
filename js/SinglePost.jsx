import React from 'react';
import { render } from 'react-dom';

const SinglePost = props => {
	return (
		<div className="col-sm-8 blog-main">
		  <div className="blog-post">
			  <h2 className="blog-post-title">{props.post.title}</h2>
			  <p className="blog-post-meta">
			    {props.post.date} by <a href="#">{props.post.author}</a>
			  </p>
			  <p>{props.post.post}</p>
		  </div>
		</div>
	);
};

export default SinglePost;