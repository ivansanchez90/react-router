import { NavLink } from 'react-router-dom'
import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/users">Users</NavLink>
        </li>
      </ul>
    </div >
  )
}

export default Navbar