const selectedPostReducer = (state, action) => {
  if (state === undefined) {
    return null
  }

  if (action.type === 'SELECT_POST') {
    return action.payload;
  } else {
    return state;
  }
}

export default selectedPostReducer;
