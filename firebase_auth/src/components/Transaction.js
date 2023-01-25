import React,{useState} from 'react'
import app from '../firebaseConfig';
import { getAuth,  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Transaction() {
    const auth = getAuth(app);
    const navigate=useNavigate();

    const handlelogout =(e)=>{
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("logout successfull");
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
 
 
    return (
    <div className='justify-center items-center space-x-16'>
        <button onClick={handlelogout} className='bg-purple-900 text-white hover:bg-red-400 font-bold py-2 px-4 mt-3 rounded items-center'>LogOut</button>
    </div>
  )
}

export default Transaction