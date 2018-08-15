import React, { Component } from 'react'


import Navbar from './static/Navbar'
import Footer from './static/Footer'
import JumboNewPost from './static/JumboNewPost'

class NewBlogPost extends Component{
  render(){
    return(
      <div>
      <Navbar />
      <JumboNewPost title="Create a New Blog Post!" subtitle="Tell everyone all about it!"/>
        <div className="container">
        <form>
        <input type="text" name="blogTitle" placeholder="blogTitle" />
        <input type="text" name="subTitle" placeholder="categories" />
        <input type="textarea" name="content" placeholder="content" />
        <input type="submit" />
        </form>
        </div>
      </div>
    )
  }
}

export default NewBlogPost
