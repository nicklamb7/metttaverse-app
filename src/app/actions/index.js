import posts from '../posts'

export function setPosts() {
  return{
    type: 'SET_POSTS',
    payload: posts
  }
}
