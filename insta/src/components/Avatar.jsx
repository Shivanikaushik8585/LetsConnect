import React from 'react'
import UserIMG from  "../assets/user.png"
import "./Avatar.css"
function Avatar({src}) {
  return (
    <div className='Avatar'>
    <img src={ src ? src:UserIMG} alt="userImg"  ></img>
         
    </div>
  )
}

export default Avatar
