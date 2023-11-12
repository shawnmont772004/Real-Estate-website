import React from 'react'
import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
        <div className='max-w-full bg-slate-200 shadow-lg'>
        <nav className="flex justify-around p-4 items-center">
                <div >
                    <Link to='/Profile'>
                        <h1 className="font-bold tex-sm p-2 pl-3 sm:text-2xl ">
                            <span className="text-slate-600">Monteiro.</span>
                            <span className="text-slate-400" >co</span>
                        </h1>   
                    </Link>    
                </div>
                <div>
                    <form className="bg-slate-100 p-2 flex items-center ml-6 rounded-lg ">
                        <input type='text' placeholder='Search ...' className="w-24 sm:w-64 bg-transparent focus:outline-none"/>
                        <FaSearch className="text-slate-700"/>
                    </form>
                </div>
                <div className="ml-4">
                    <ul className="flex sm:gap-12 sm:items-center" >
                        <Link to="/">
                            <li className="hidden sm:inline hover:bg-slate-300 p-2 rounded-md text-xl"><Link to='/'>Home</Link></li>
                        </Link>
                        <Link to="/About">
                            <li className="hidden sm:inline hover:bg-slate-300 p-2 rounded-md text-xl">About</li>
                        </Link>
                        <Link to='/SignIn'>
                            <li className=" hover:bg-slate-300  p-2 mr-4 rounded-md sm:text-xl hover:no-underline hover:text-red-500">Sign In</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
      </>
  )
}

export default Header