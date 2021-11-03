import posts from '../posts';

export function setPosts() {
  return{
    type: 'SET_POSTS',
    payload: posts
  }
}

export function selectPost(post) {
  return {
    type: 'SELECT_POST',
    payload: post
  }
}
