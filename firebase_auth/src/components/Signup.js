import React, { useState } from 'react'
import app from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const auth = getAuth(app);
    const navigate=useNavigate();
    //let [name, setName]=useState("");
    let [email, setEmail]=useState("");
    let [password, setPassword]=useState("");
    let handleReg =(e)=>{
        e.preventDefault();
        if(!email && !password){
            alert("Fill all the elements");
        }
        else if(!email){
            alert("Fill email");
        }
        else if(!password ){
            alert("Fill password");
        }

        else if(password.length<7 ){
            alert("password should be of 8 length");
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // Signed in 
                alert("New user created");
                navigate("/");
                // ...
                })
                .catch((error) => {
                console.log(error);
                if(error.code=='auth/email-already-in-use'){
                    alert("Email already in use!");
                }
                // ..
                });
        }
    }

  return (
    <div>
            <>
    <div className='pt-5 h-screen w-full justify-center bg-grey-200'>
        <div className='hidden sm:block'>
            {/* <img className='w-full h-full object-cover' src={loginImg} alt="" /> */}
        </div>

        <div className=' flex flex-col justify-center  '>
            <form className='max-w-[400px] w-full mx-auto rounded-lg  p-8 px-8 border-solid border-2 border-black-600'>
                <h2 className='text-4xl text-black font-bold text-center '>Registration</h2>
                <div className='flex flex-col text-black-800 py-2'>
                    <label>Email</label>
                    <input onChange ={(e)=>setEmail(e.target.value)}className='p-2 rounded-lg border-solid border-2 border-black-600   mt-2   focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-black-800 py-2'>
                    <label>Password</label>
                    <input onChange ={(e)=>setPassword(e.target.value)} className='p-2 rounded-lg border-solid border-2 border-black-600 bg-white-700 mt-2 focus:border-black-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-white-400 py-2'>
                    {/* <p>{err}</p> */}
                    {/* Email already taken notification */}
                </div>
                <button onClick={handleReg} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
                
            </form>
        </div>
    </div>
    </>
    </div>
  )
}

export default Signup