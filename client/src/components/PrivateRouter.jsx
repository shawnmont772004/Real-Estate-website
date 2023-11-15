import React from 'react'
import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"

export default function PrivateRouter() {
    const { currentUser }=useSelector((state)=>state.user);
  return currentUser ? <Outlet /> : <Navigate to='/SignIn' />;
  
}//if the user posts profile though he is not authenticated then it is called navigate and it will take the user to sign in page.
// If he is authenticated then it will take the user to the profile page. 
//If he is not authenticated then it will take the user to the sign in page.   