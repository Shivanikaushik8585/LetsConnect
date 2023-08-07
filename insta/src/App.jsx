import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Welcome from './components/Welcome'

import Required from './components/Required'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
         <Route element={<Required/>}>

        <Route path="/home"  element={<Home />}></Route>
         </Route>
         <Route path="/" element={<Welcome/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
