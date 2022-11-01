import React from 'react'
import './Main.css'
import { Link, useNavigate } from 'react-router-dom'
import Car from './Car'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux'
import {  getAuth } from "firebase/auth"
//import { updateProfile } from 'firebase/auth'



import { logout,selectUser } from '../features/counter/userSlice'

function Main({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
        navigate('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='teslaAccount'>
      <div className='teslaAccount__header'>
        <div className='teslaAccount__logo'>
          <Link to='/'>
            <img
              src=''
              alt=''
            />
          </Link>
        </div>
        <div className='teslaAccount__links'>
          <Link to='/main'>Airspace</Link>
          <Link to='/main'>GVAGON</Link>
          <Link to='/main'>METALIS</Link>


          <Link to='/main'>Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <div
            className='teslaAccount__menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className='teslaAccount__closeMenu' />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className='teslaAccount__info'>
        <div className='teslaAccount__person'>
          <h4>{user?.email + "'s"} Airspace</h4>
          {console.log(user)}
        </div>
        <div className='teslaAccount__infoRight'>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className='teslaAccount__car'>
        <Link to="/testdrive">
        <Car
          imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
          model='Airspace'
          testDrive
        /></Link>
        <Car
          imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815'
          model='Metalis'
        />
      </div>
    </div>
  )
}

export default Main