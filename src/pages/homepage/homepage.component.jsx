import React from 'react'
import Challenge from '../../components/challenge/challenge.component';
import KanyeQoute from '../../components/kanye/kanye.component';
import './homepage.styles.scss'

const Homepage = () => (
  
    <div className="home">
      <h1>Welcome to my fitness App</h1>
      <p>This months fitness challenge</p>
      <KanyeQoute />
      <Challenge />
    </div>
)

export default Homepage;


