import React from 'react';

const PostItem = (props) => {

	return (
		<div className="blog-post">
	        <h2 className="blog-post-title">{props.post.title}</h2>
	        <p className="blog-post-meta">January 1, 2014 by <a href="#">{props.post.author}</a></p>
	        <p>{props.post.post}</p>
	    </div> 
	);
}

export default PostItem;