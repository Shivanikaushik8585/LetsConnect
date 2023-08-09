import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Home from './components/Home'


import Required from './components/Required'
import NavBAR from './components/NavBAR'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        
         <Route element={<Required/>}>

        <Route   element={<Home />}>
          
          <Route path="/" element ={<Feed/>}>


          </Route>
          <Route path="/profilr/:userid" element={<Profile/>}></Route>
        </Route>

         </Route>
         
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
