export default (state = {
  posts: []
}, action) => {
  switch (action.type) {

    case 'LOADING_POSTS':
      return {...state }

    case 'ADD_POST':
      return [ ...state, action.post ];

    case 'FETCH_POSTS':
      return action.posts;

    default:
      return state;
  }
};
