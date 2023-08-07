import React from 'react'
import { Navigate, Outlet } from 'react-router';
import Login from './Login';
import { getItem,KEY_ACCESS_TOKEN } from '../Utilis/localStorage';
function Required() {
    const user = getItem(KEY_ACCESS_TOKEN);
    
  return (
    
    
       user ? <Outlet /> : <Navigate to="/login"/>
    

  )
}

export default Required
