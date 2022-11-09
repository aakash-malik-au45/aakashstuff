import React, { useState } from 'react';

import './App.css';
import Header from './Header';

import Home from './Home';

import Menu from './Menu';

const App1 = () => {
    const [isMenuopen,setisMenuOpen] = useState(false)
  return (

   
    <div className="app">
     <Header isMenuopen={isMenuopen} setisMenuOpen={setisMenuOpen} />
     {isMenuopen && <Menu/>}
     <Home/>

     
    </div>
 
  );
}




export default App1