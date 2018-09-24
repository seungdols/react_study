import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  }

  return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/react" activeStyle={activeStyle}>About react</NavLink></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu