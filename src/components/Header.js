import React from 'react'
import User from './User';
const Header = () => {
  return (
    <div className="logo-container">
        <h1>Konneru Lakshmaiah University</h1>
        <User name="Teja" type="Guest"/>
        <h4>Registration for Y23 Students</h4>
        <button className="btn">Register Now</button>
      </div>
  )
}

export default Header
