import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
class Contact extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <Jumbotron title="About Us" subtitle="Fill out the about page someday"/>
        <div className="container">
          <h2>About Us</h2>
            <p>dlskfjlkasdfhlksajdbfnlkjasjhflkjsadhflkjsadhfkljasdhflkjshdfljk
            skjdfbklsdhflkjsdahflkjsadhflkjsdhflkshdfkljhsdlfkhsdkljfhskjldfhjlkjsdh
            sdkfjls;dfjls;kdfjl;ksdjf;lksdjf;lksdjf;lkdjsf;lkjsdak;lfjsa;dlkfj;klsadjfadkls;</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact
