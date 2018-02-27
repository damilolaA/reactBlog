import React from 'react';
import PostItem from './PostItem';

const Posts = props => {
  let posts;

  if (props.data) {
    posts = props.data.map(post => {
      return <PostItem key={post.title} post={post} />;
    });
  }

  return <div className="col-sm-8 blog-main">{posts}</div>;
};

export default Posts;
