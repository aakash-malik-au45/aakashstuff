import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import MenuItem from './MenuItems'
const Menu = () => {
  return (
    <div className='menu'>
      <Link to="/login"><MenuItem title='existing inventory' /></Link>
      <Link to="/login"><MenuItem title='used inventory' /></Link>
      <Link to="/carrer"><MenuItem title='innovation' /></Link>
      <Link to="/carrer"><MenuItem title='carrier' /></Link>
      <Link to="/carrer"><MenuItem title='media' /></Link>
      <Link to="/carrer"><MenuItem title='investor' /></Link>
      <Link to="/testdrive"><MenuItem title='charging' /></Link>
      <Link to="/testdrive"><MenuItem title='powerwall' /></Link>
      <Link to="/testdrive"><MenuItem title='test drive' /></Link>
      <Link to="/testdrive"><MenuItem title='find us' /></Link>
      <Link to="/carrer"><MenuItem title='support' /></Link>
      <MenuItem title='region-global' />
    </div>
  )
}

export default Menu
