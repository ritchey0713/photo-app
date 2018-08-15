const PostService = {
  fetchPosts: () => {
    return fetch('/posts')
    .then(resp => resp.json())
  }

}

export default PostService
