import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import { useDispatch } from 'react-redux'
import {  getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
//import { auth } from "../Firebase";
import { login } from '../features/counter/userSlice'


function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();

  const signUp = (e) => {
    e.preventDefault()

    if (!fName) {
      return alert('Please enter a first name!')
    }
    if (!lName) {
      return alert('Please enter a last name!')
    }

    createUserWithEmailAndPassword(auth,email, password).then((userCredential) => { 
      //const user = userCredential.user
        updateProfile.user({
            displayName: fName,

          })
          .then(() => {
            dispatch(
              login({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: fName,
              })
            )

            navigate('/main')
          }) 
      }).catch((error) => alert(error.message))
  }

  return (
    <div className='signup'>
      <div className='signup__header'>
        <div className='signup__logo'>
          <Link to='/'>
            {' '}
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb1LmDeEQKvOnFMcpitACtCqK_3CmI-CCKg&usqp=CAU'
              alt=''
            />
          </Link>
        </div>
        <div className='signup__language'>
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='signup__info'>
        <h1>Create Account</h1>
        <form className='signup__form'>
          <label htmlFor='fName'>First Name</label>
          <input
            id='fName'
            type='text'
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor='lName'>Last Name</label>
          <input
            id='lName'
            type='text'
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={signUp}>
            Create Account
          </button>
        </form>
        <div className='signup__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/login'>
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Signup