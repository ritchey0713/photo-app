

export function fetchPosts(){
  const API_URL = process.env.REACT_APP_API_URL
  return (dispatch) =>{
    dispatch({type: 'LOAD_POSTS'})
    return fetch(`${API_URL}/posts`)
    .then(resp => resp.json())
    .then(posts => dispatch({type:'FETCH_POSTS', payload: posts.details }))
  }
}
