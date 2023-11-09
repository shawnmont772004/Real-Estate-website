import React from 'react'

function SignUp() {
  return (
    <div className="max-w-sm  mt-16 mx-24 sm:mx-auto" >
     <div >
        <h1 className="font-semibold ml-24 sm:ml-36 text-2xl mb-5 ">Sign up</h1>
      </div>
      <form className="p-1 flex flex-col gap-5">
        <input type="text" placeholder="UserName" className="border-2 border-slate-300 p-2 w-64 sm:w-96 rounded-lg text-sm text-slate-700 focus:outline-none"/>
        <input type="text" placeholder="Email" className="border-2 p-2  border-slate-300 w-64 sm:w-96 rounded-lg text-sm text-slate-700 focus:outline-none"/>
        <input type="text" placeholder="Password" className="border-2 p-2 border-slate-300  w-64 sm:w-96 rounded-lg text-sm text-slate-700 focus:outline-none"/>
        <button className="bg-slate-700 w-64 sm:w-96 rounded-lg p-2 text-white hover:opacity-90 disabled:opacity-80">Sign up</button>
      </form>
      <div className="flex gap-2 mt-1 text-sm ml-10 sm:ml-24">
        <p>Have an account?</p>
        <span className=" text-blue-700 underline">Sign in</span>
      </div>
      
    </div>
  )
}

export default SignUp