import React from 'react'
import{AiFillHome,AiFillFolderOpen}from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import {BiBookAdd  } from "react-icons/bi";
import { FaBandcamp } from "react-icons/fa";
import {RxAvatar } from "react-icons/rx";
import "./Nav.css"
function NAV() {
  return (
    <div>
      <div className="nav">
        <div className="home icon ">

            <AiFillHome/>
        </div>
        <div className="explore icon">
     
        <FaBandcamp/>
        </div>
        <div className="reelicon icon">
        <AiFillFolderOpen/>
        </div>
        <div className="create icon">
        < BiBookAdd/>
        </div>
        <div className="message icon">
        <BsMessenger/>
        </div>
        <div className="profile icon">
        <RxAvatar/>
        </div>

      </div>
    </div>
  )
}

export default NAV
