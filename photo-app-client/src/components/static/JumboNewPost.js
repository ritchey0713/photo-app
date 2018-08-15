import React, { Component } from 'react'
import './JumboNewPost.css';

const Jumbotron =(props) =>{

    return(
      <div className="jumboNewPost jumbotron-fluid">
        <div className='container'>
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
    )
  }

export default Jumbotron
