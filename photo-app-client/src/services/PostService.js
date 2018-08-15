const API_URL = process.env.REACT_APP_API_URL



const PostService = {
  fetchPosts: () => {
    return fetch(`${API_URL}/posts`)
    .then(resp => resp.json())
  }

}

export default PostService
