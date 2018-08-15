import React, { Component } from 'react';

import './App.css';
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import PostService from './services/PostService'
import Home from './containers/Home.js'
import { connect } from 'react-redux'
import Contact from './components/static/Contact.js'
import About from './components/static/About.js'
import NewBlogPost from './components/NewBlogPost.js'
import AllPosts from './containers/AllPosts.js'
import { fetchPosts } from './actions/postActions.js'

class App extends Component {
  componentDidMount(){
    this.props.fetchPosts()
    }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={AllPosts} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/newPost' component={NewBlogPost} />
        </div>
      </Router>
)
  }
}

const mapStateToProps = (state) => {
  return {allPosts: state.posts}
}


export default connect (mapStateToProps, mapDispatchToProps)(App);
