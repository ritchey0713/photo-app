import React from 'react'
import { connect } from 'react-redux'

  const PostShow = ({ post }) => {
    return(
      <div>
        <h3> {post.title}</h3>
      </div>
    )
  }

  const mapStateToProps = (state, ownProps) =>{
      const post = state.posts.find(post => post.id == ownProps.match.params.postId)

      if(post){
        return { post }
      } else {
        return { post: {} }
      }
    }


  export default connect(mapStateToProps)(PostShow)
