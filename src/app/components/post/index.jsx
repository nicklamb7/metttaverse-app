import React from 'react';
import './style.scss';

function Post() {
  return (
    <div className="post">
      <div className="post-top">
        <img src="#" alt="" />
      </div>
      <div className="post-bottom">
        <div className="left-side">
          <div className="image-wrapper">
            <img src="#" alt="" />
          </div>
          <h1>Title</h1>
        </div>
        <div className="right-side">
          <p>Content</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
