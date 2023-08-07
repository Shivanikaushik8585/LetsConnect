import React from 'react'
import './Login.css'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { axiosClient } from '../Utilis/axiosClient';
import { KEY_ACCESS_TOKEN ,setItem} from '../Utilis/localStorage';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try{

      const response = await axiosClient.post('/auth/login', {
        email,
        password
      });
      console.log(response.result.accessToken);
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate('/');
      
  
      
      
    }catch(e){
      console.log(e.message);

    }


  }

  return (
    <div>

      <div className="card">
        <h2> LetsConnect</h2>

        <input type='email' placeholder='username or userid'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        ></input>
        <input type="password" name="" id="" placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value)

          }} />


        <button className='Login'
          onClick={handleSubmit}
        >Login</button>

        <hr />
        <p>Or</p>
        <p>Forget Password</p>
      </div>
      <div className='card sign' >
        <p>Don't have an account ?
          <Link to="/sign">

            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
