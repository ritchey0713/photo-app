import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import PostList from '../components/PostList';



const AllPosts = ({ match, posts }) =>
  <div>
    <PostList posts={posts} />

  </div>;

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(AllPosts);
