import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Oauth from "../components/Oauth.jsx";

function SignUp() {
  const [formData,setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  };

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      setLoading(true);

      const res=await fetch('api/auth/SignUp',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/SignIn');

    }
    catch(error)
    {
        setLoading(false);
        setError(error.message);
    }
  };
  return (
    <div className="max-w-sm  mt-16 mx-28 sm:mx-auto" >
     <div >
        <h1 className="font-semibold ml-24 sm:ml-36 text-2xl mb-5 ">Sign up</h1>
      </div>
      <form onSubmit={ handleSubmit } className="p-1 flex flex-col gap-5">
        <input type="text" placeholder="UserName" className="border-2 border-slate-300 p-2 w-64 sm:w-96 rounded-lg text-sm text-slate-700 focus:outline-none" id="userName" onChange={handleChange}/>
        <input type="text" placeholder="Email" className="border-2 p-2  border-slate-300 w-64 sm:w-96 rounded-lg text-sm text-slate-700 focus:outline-none" id="Email"  onChange={handleChange}/>
        <input type="text" placeholder="Password" className="border-2 p-2 border-slate-300  w-64 sm:w-96 rounded-lg text-sm text-slate-700 focus:outline-none" id="Password" onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 w-64 sm:w-96 rounded-lg p-2 text-white hover:opacity-90 disabled:opacity-80">{loading ? 'Loading...' : 'Sign Up'}</button>
        <Oauth/>
      </form>
      <div className="flex gap-2 mt-1 text-sm ml-10 sm:ml-24">
        <p>Have an account?</p>
        <Link to={'/SignIn'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
      
  );
}

export default SignUp