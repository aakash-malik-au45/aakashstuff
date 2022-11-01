import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth"
import { useDispatch } from 'react-redux'

import './inLogin.css'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecond from "./ButtonSecond";
import { login } from "../features/counter/userSlice";


const Login = () => {
  const[email,setEmail]= useState('')
  const[password, setPassword] =useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  

  const signin = (e) =>{
    e.preventDefault()
    

    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
     
      dispatch(login({
        email:userCredential.user.email,
        uid:userCredential.user.uid,
        displayName:userCredential.user.displayName,
      }))
      navigate('/main')
      

    }).catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='loginheader'>
      <div className='loginlogo'>
        <Link to='/'>
        <img className='logoimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb1LmDeEQKvOnFMcpitACtCqK_3CmI-CCKg&usqp=CAU' alt=''/>
        </Link>
        </div>
        <div className='loginlang'><LanguageOutlinedIcon/><span>En-Ind</span></div>
      </div>
      <div className='logininfo'>
        <h1>Sign In</h1>
        <form className='formlogin'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={email}
          onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          
          <ButtonPrimary className="btn" name='Sign-in' type='submit' onClick={signin}/>

        </form>
        <div className="logindiv">
          <h4><span>OR</span></ h4>
       
        </div>
        <Link to='/signup'> <ButtonSecond className="btn" name='Create a account' /></Link>
   
      </div>
    </div>
  )
}

export default Login