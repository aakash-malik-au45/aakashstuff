import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Login from './components/Login';
import { selectUser } from './features/counter/userSlice';
const App2 = () => {
    const user = useSelector(selectUser)
  return (
    <div> 
          <Login/>
    </div>
  )
}

export default App2


