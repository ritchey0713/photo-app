import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import PostList from '../components/PostList'
import Navbar from './static/Navbar'
import Footer from './static/Footer'
import JumboNewPost from './static/JumboNewPost'

const Posts = ({match, posts}) => {
  <div>
    <NavBar />
    <Jumbotron title='Current Posts' subtitle="Click to read more!" />
      <PostList posts={posts} />
      <Switch>
        <Route path={`${match.url}/postId`} component={PostShow} />
      </Switch>

      <Footer />
  </div>
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)
