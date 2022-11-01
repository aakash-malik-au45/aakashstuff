import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';



const Header = ({isMenuopen,setisMenuOpen}) => {
  return (
    <div className='header'>
      
      <div className='leftheader'>
        <Link to='/'>New lauch</Link>
        <Link to='/'>Gvagon</Link>
        <Link to='/'>Metalis</Link>
        <Link to='/'>Accessories</Link>
      </div>
      <div className='rightheader'>
        <Link to='/' className={isMenuopen && 'headerhiden'}>Shop</Link>
        <Link to='/login' className={isMenuopen && 'headerhiden'}>Login</Link>
        <div className='menuopen' onClick={() =>setisMenuOpen(!isMenuopen)}>
        {isMenuopen ?  <CloseOutlinedIcon/> : <MenuOpenIcon/>}
          
        </div>

      </div>
    </div>
  )
}

export default Header
