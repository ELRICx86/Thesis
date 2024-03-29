import React,{useState} from 'react'
import app from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const auth = getAuth(app);
    const navigate=useNavigate();
    //let [name, setName]=useState("");
    let [email, setEmail]=useState("");
    let [password, setPassword]=useState("");

    const handleSubmit =(e)=>{
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
        else{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("successfully logged in");
                 navigate("/Transaction");
  })
  .catch((error) => {
    console.log(error.code);
    if(error.code=='auth/user-not-found'){
        alert("Invalid user");
    }
    if(error.code=='auth/wrong-password'){
        alert("Wrong password");
    }
  });
        }
    }
  return (
    <>
    <div className='pt-5 h-screen w-full justify-center bg-grey-200'>
        <div className='hidden sm:block'>
            {/* <img className='w-full h-full object-cover' src={loginImg} alt="" /> */}
        </div>

        <div className=' flex flex-col justify-center  '>
            <form className='max-w-[400px] w-full mx-auto rounded-lg  p-8 px-8 border-solid border-2 border-black-600'>
                <h2 className='text-4xl text-black font-bold text-center '>SIGN IN</h2>
                <div className='flex flex-col text-black-800 py-2'>
                    <label>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='p-2 rounded-lg border-solid border-2 border-black-600   mt-2   focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-black-800 py-2'>
                    <label>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className='p-2 rounded-lg border-solid border-2 border-black-600 bg-white-700 mt-2 focus:border-black-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-white-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    {/* <p>Forgot Password</p> */}
                </div>
                <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                
            </form>
        </div>
    </div>
    </>
    
  )
}

export default Signin