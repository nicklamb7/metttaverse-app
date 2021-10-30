const postsReducer = (state, action) => {
  if (state === undefined) {
    return []
  }

  switch(action.type) {
    case 'SET_POSTS':
      return action.payload;
    default:
      return state;
  }
}

export default postsReducer;
