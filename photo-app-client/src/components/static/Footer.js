import React, { Component } from 'react'
import './Footer.css'

const Footer = () => {
    return(
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">My WebSite $#169; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    )
  }


export default Footer
