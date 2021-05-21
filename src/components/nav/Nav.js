import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const myActiveStyle={
    backgroundColor: 'rgb(45, 50, 200)',
    color: '#fff'
  }
  return (
    <nav> 
      <NavLink to='/' className='nav-link' exact>Home</NavLink>
      <NavLink to='/students' className='nav-link' activeStyle={myActiveStyle}>Students</NavLink>
      <NavLink to='/render' className='nav-link' activeClassName='active-link'>Render Comp</NavLink>
      <NavLink to='/classcomponentlifecycle' className='nav-link'>Class Component Lifecycle</NavLink>
      <NavLink to='/users' className='nav-link'>Users</NavLink>
    </nav>
  )
}

