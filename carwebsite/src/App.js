import React, {  useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import App1 from './App1';
import App2 from './App2';
import Main from './components/Main';
import Signup from './components/Signup';
import { login, logout } from './features/counter/userSlice';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux'
import Testdrive from './components/Testdrive';
import Carrer from './components/Carrer';




function App() {
  //const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        // User is signed in
        dispatch(
          login({
            email: userCredential.email,
            uid: userCredential.uid,
            displayName: userCredential.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
    <Routes>
    <Route path="/" element={ <App1 />} />
    <Route path="/login" element={ <App2 />} />   
    <Route path="/signup" element={ <Signup />} /> 
    <Route path="/main" element={ <Main  />} /> 
    <Route path="/testdrive" element={ <Testdrive  />} /> 
    <Route path="/carrer" element={ <Carrer  />} /> 
    
    </Routes>
</Router>
  );
}

export default App;
