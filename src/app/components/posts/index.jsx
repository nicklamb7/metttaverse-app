import React from 'react';
import Post from '../post';
import './style.scss';

const posts = [{
  profileImg: 'Something',
  userName: 'Something',
  likes: 'something'
}, {
  profileImg: 'Something',
  userName: 'Something',
  likes: 'something'
}, {
  profileImg: 'Something',
  userName: 'Something',
  likes: 'something'
}, {
  profileImg: 'Something',
  userName: 'Something',
  likes: 'something'
}]

function Posts() {
  return (
    <div className="posts">
      {posts.map(post =>
        <Post
          profileImg={post.profileImg}
          userName={post.userName}
          likes={post.likes}/>
        )}
    </div>
  )
}

export default Posts;
