import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import Oauth from "../components/Oauth";

function SignIn() {
  //reactjs hooks useState hook formData is array[0] and setFormData is array[1] and is a function
  const [formData,setFormData] =useState({
    Email:"",
    Password:""
  });
  //const [error,setError]=useState(null);
  //const [loading,setLoading]=useState(false);
  const { loading, error } = useSelector((state) => state.user);

  //console.log(formData); for debugging changes  in the input text
 
  const handleChange=(e)=>{
    setFormData((prev)=>{
      return {...prev,
        [e.target.name]:e.target.value};
    });
  }//you can aso just use formData directky like in SignUp

  const navg=useNavigate();
  const dispatch = useDispatch();

  const handleSubmit= async(e)=>{
    e.preventDefault();//to prevent the loss of data fetched from handleChange after refreshing the page
    console.log(formData);
    try{
      //setLoading(true);
      dispatch(signInStart());
      const res=await fetch('api/auth/SignIn',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });

      const data=await res.json();
      console.log(data);

      if(data.success=== false)
      {
        dispatch(signInFailure(data.message));
        //setError(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      //setError(null);
      navg('/');
    }
    catch(error)
    {
      dispatch(signInFailure(error.message));
      //setError(data.message);
    }
  }

  return (
    <div className="max-w-sm  mt-20 mx-28 sm:mx-auto">
      <div>
        <h1 className="font-semibold ml-20 sm:ml-36 p-2 text-2xl mb-5">Sign In</h1>
      </div>
      <div>
       <form  onSubmit={ handleSubmit } className="flex flex-col gap-4">
        <input onChange={ handleChange }  name="Email" type="text" placeholder='Email' className="sm:w-96 w-64 p-2 focus:outline-orange-300 border-2 border-gray-300 rounded-lg "/>
        <input onChange={ handleChange } name="Password" type="text" placeholder='Password' className="sm:w-96 w-64 p-2 focus:outline-orange-300 border-2 border-gray-300 rounded-lg "/>
        <button  disabled={loading} type='submit' className="p-2 bg-slate-700 sm:w-96 w-64 rounded-lg text-sm hover:opacity-90 disabled:opacity-80 text-white">
          {loading ? 'Loading...' : 'SIGN IN'}
        </button>
        <Oauth/>
       </form>
      </div>
      <div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  )
}

export default SignIn