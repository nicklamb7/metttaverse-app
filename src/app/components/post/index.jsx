import React from 'react';
import './style.scss';

function Post(props) {
  return (
    <div className="post">
      <div className="post-top">
        <img src="#" alt="" />
      </div>
      <div className="post-bottom">
        <div className="left-side">
          <div className="image-wrapper">
            <img src={props.profileImg} alt="" />
          </div>
          <p><big>{props.userName}</big></p>
        </div>
        <div className="right-side">
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
