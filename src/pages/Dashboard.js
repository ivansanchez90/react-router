import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Logout</button>
      <Link to="welcome">
        say Welcome
      </Link>

      <Outlet />


    </div>
  )
}

export default Dashboard