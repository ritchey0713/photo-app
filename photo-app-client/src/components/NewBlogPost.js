import React, { Component } from 'react'


import Navbar from './static/Navbar'
import Footer from './static/Footer'
import Jumbotron from './static/Jumbotron'

Class NewBlogPost extends Component{
  render(){
    return(
      <div>
        <form>
        <input type="text" name="blogTitle" placeholder="blogTitle" />
        <input type="text" name="subTitle" placeholder="categories" />
        <input type="textarea" name="content" placeholder="content" />
        <input type="submit" />
        </form>
      </div>
    )
  }
}
