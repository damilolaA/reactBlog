import React from 'react';

const Posts = () => (
	<div className="col-sm-8 blog-main">

      <div className="blog-post">
        <h2 className="blog-post-title">Sample blog post</h2>
        <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
      </div>
    </div>
);

export default Posts;