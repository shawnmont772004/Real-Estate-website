import React from 'react'
import {useSelector } from "react-redux"
function Profile() {
  const {currentUser}=useSelector((state)=>state.user);
  return (
    <div className="p-3 max-w-lg mx-auto mt-4">
      <div>
        <h1 className="font-bold text-2xl ml-48">Profile</h1>
      </div>
      <form className="mt-2">
        <img src={currentUser.avatar} alt="profile" className="rounded-full h-28 object-cover ml-44 "/>
        <div className="flex flex-col gap-4 items-center  mt-4">
          <input type="text" placeholder="User Name" className="p-2 border border-slate-300 hover:border-red-400 focus:outline-orange-400 w-64 sm:w-96 rounded-lg"/>
          <input type="text" placeholder="Email" className="p-2 border border-slate-300 hover:border-red-400 w-64 sm:w-96 focus:outline-orange-400 rounded-lg"/>
          <input type="text" placeholder="Password" className="p-2 border border-slate-300  hover:border-red-400 w-64 sm:w-96 focus:outline-orange-400 rounded-lg"/>
          <button type="submit" className="p-2 bg-green-500 w-64 sm:w-96 border rounded-lg text-white text-sm hover:opacity-70">Update</button>
        </div>
      </form>
      <div className="text-sm ml-32 flex gap-16 sm:ml-16 sm:flex sm:gap-48 mt-2 text-red-800">
        <span className="hover:underline">Delete account?</span>
        <span className="hover:underline">Sign Out?</span>
      </div>
    </div>
  )
}

export default Profile