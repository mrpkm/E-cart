import React from 'react'
import '../Assets/nav.css'
import { Link, NavLink, Outlet } from 'react-router-dom'


function Nav() {
  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <ul>
            <li><Link to="/">mr pk</Link></li>
          </ul>
        </div>
        <div className="main">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
                to='/'>
                <h4>home</h4>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
                to='/item'>
                <h4>item</h4>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
                to='/cart'>
                <h4>cart</h4>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
                to='/sign-in'>
                <h4>sing in</h4>
              </NavLink>
            </li>


            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
                to='/sign-up'>
                <h4>sign up</h4>
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
      <Outlet />

    </>
  )
}

export default Nav