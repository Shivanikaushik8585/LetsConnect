import React, { useState } from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'
import { axiosClient } from '../Utilis/axiosClient';

function Signup() {
  const[name,setName] = useState(" ");
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try{

      const result = await axiosClient.post('/auth/sign', {
        name,
        email,
        password
      });
      console.log(result);
    }catch(e){
      console.log(e.message);

    }


  }
  return (
    <div>
      
      <div className="card">
        <h2> LetsConnect</h2>
        
        <input type='email' placeholder='Phone No or email' onChange={(e)=>{
             setEmail(e.target.value)          
        }}></input>
        <input type='text' placeholder='FullName' onChange={(e)=>
        setName(e.target.value)}></input>
      
        <input type="password" name="" id=""  placeholder='Password'
        onChange={(e)=>
          setPassword(e.target.value)}
        />
        <button className='Login'onClick={handleSubmit}
         
        >Sign up</button>
        <hr />
     
      </div>
      <div className='card sign' >
        <p> Have an account ? 
            <Link to="/">
            
            Log in
            </Link>
            </p>
      </div>
    </div>
  )
}

export default Signup
