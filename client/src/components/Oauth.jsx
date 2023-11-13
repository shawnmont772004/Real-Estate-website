import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import {app} from "../firebase.js"
export default function Oauth() {

    const handleGoogle =async()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
      
            const result = await signInWithPopup(auth, provider);
            console.log(result);
        } catch (error) {
            console.log("Cannot sign up with google",error);
        }


    }
  return (
    <button onClick={handleGoogle} type="button" className="bg-red-700 sm:w-96 w-64 text-white font-md text-sm p-2 border-2 rounded-lg hover:opacity-70 ">CONTINUE WITH GOOGLE</button>
  )
}

