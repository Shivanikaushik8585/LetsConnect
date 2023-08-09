import React from 'react'
import   "./Navbar.css"

import {AiOutlineSearch,AiFillHeart } from "react-icons/ai";
import NAV from './NAV';
import Avatar from './Avatar';

function NavBAR() {
  return (
    <div>
    <header className='navbar'>
      <div className="container">
        <h2 className="banner">LetsConnect</h2>
        <div className="srcbtn">

        <input type="search" name="" id="" 
        
        />
        <p className='icon'><AiOutlineSearch/></p>
      <div className="notification icon">
      <AiFillHeart/>
      </div>
        </div>

      </div>

    </header>
    <NAV/>
     

    
    </div>
  )
}

export default NavBAR
