import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

const Posts = ({match, posts}) => {

// make a post list component for this
//   const renderPosts = posts.map((post, index) => {
//     <span key={post.title}>{post.title} </span>
//   })
//
//   return(
//     <ul>
//     {renderPosts}
//     </ul>
//   )
// }



<div>
  <PostList posts={posts} />
  <Switch>
  <Route path={`${match.url}/new`} component={NewBlogPost} />
  <Route path={`${match.url}/postId`} component={PostShow} />
</Switch>


</div>
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)
