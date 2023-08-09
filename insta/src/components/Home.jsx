import React, { useEffect } from 'react'
import { axiosClient } from '../Utilis/axiosClient'
import NavBAR from './NavBAR'
import { Outlet } from 'react-router-dom'
import NAV from './NAV'
import Feed from './Feed'
function Home() {
  

    
    return (
        <div>
            <NavBAR/>


        
        <Outlet/>
        </div>
    )

    }
export default Home
