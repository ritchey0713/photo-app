// make a post list component for this


import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({ posts }) => {
    const renderPosts = posts.map((post, index) =>
      <Link to={`/posts/${post.id}`}>{post.title}
          <div>{post.subtitle}</div>
       </Link>
    )
    return(
      <ul>
        {renderPosts}
      </ul>
    )
  }
