import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import PostShow from '../components/PostShow';



const AllPosts = ({ match, posts }) =>
  <div>
    <PostList posts={posts} />
    <Switch>
      <Route path={`${match.url}/postId`} component={PostShow} />
    </Switch>

  </div>;

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(AllPosts);
