import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({ posts }) => {
  const renderPosts = posts.map((post) =>
<span>
    <h3 className="container">
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
      </h3>
      <div className="container">
        <h5>{post.subtitle}</h5>
      </div>

</span>
  )

  return(
    <div>
    {renderPosts}
    </div>
  )
}

export default PostList
