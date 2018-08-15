import React, { Component } from 'react'

import Navbar from '../components/static/Navbar'
import Footer from '../components/static/Footer'
import Jumbotron from '../components/static/Jumbotron'

class Home extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <Jumbotron title="Welcome" subtitle="put something here?!"/>
        <div className="container">
          <h2>Welcome!</h2>
            <p>dlskfjlkasdfhlksajdbfnlkjasjhflkjsadhflkjsadhfkljasdhflkjshdfljk
            skjdfbklsdhflkjsdahflkjsadhflkjsdhflkshdfkljhsdlfkhsdkljfhskjldfhjlkjsdh
            sdkfjls;dfjls;kdfjl;ksdjf;lksdjf;lksdjf;lkdjsf;lkjsdak;lfjsa;dlkfj;klsadjfadkls;</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
