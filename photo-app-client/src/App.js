import React, { Component } from 'react';
<<<<<<< HEAD
=======

>>>>>>> master
import './App.css';
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import PostService from './services/PostService'
import Home from './containers/Home.js'
import Contact from './components/static/Contact.js'
import About from './components/static/About.js'
import NewBlogPost from './components/NewBlogPost.js'
import AllPosts from './containers/AllPosts.js'


class App extends Component {
  constructor(){
      super()

      this.state = {
        posts: []
      }
    }

    componentDidMount(){
      PostService.fetchPosts().then(posts => this.setState({ posts }))
    }

  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={AllPosts} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/newPost' component={NewBlogPost} />
        </div>
      </Router>
=======
      <div className="App">
      <h1>The Photo View</h1>
      </div>
>>>>>>> master
    );
  }
}


export default App;
