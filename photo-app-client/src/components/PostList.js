import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({ posts }) => {
  const renderPosts = posts.map((post) =>
    <h3 className="container"><Link to={`/posts/${post.id}`}>{post.title}
      </Link>
      <div>

        {post.subtitle}

      </div>
    </h3>
  )

  return(
    <div>
    {renderPosts}
    </div>
  )
}

export default PostList
