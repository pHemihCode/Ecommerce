import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from 'yup'
import GoogleButton from 'react-google-button'
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from '../Firebase/Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const navigate = useNavigate()
  const schema = yup.object().shape({
    email:yup.string().email().required("Input your email!"),
    password:yup.string().required("Input your password").min(8, 'Your password is too short'),
    confirmpassword:yup.string().required("Input cannot be empty")
    .oneOf([yup.ref('password')], 'Passwords must match')
  })
  const notify = () => toast.error("You have not registered your account");
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  })  
   const onSubmit =() => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    navigate('/')
    // ...
  })
  .catch((error) => {
    notify()
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    
   }
   const provider = new GoogleAuthProvider();
   const handleSignInWithGoogle =()=> {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
     navigate('/')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
   }

  return (
    <div  className='flex flex-col justify-center items-center mb-3 w-full px-2 relative top-36'>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 p-3 rounded-md w-4/5 sm:w-3/5 lg:w-1/4'>
            <div className="input-grp text-md flex flex-col mb-1 ">
              <label htmlFor="fname" className='mb-1'>Email</label>
              <input type="text" id='email' className='px-2 py-1 rounded-sm placeholder:italic outline-none' placeholder='abc@gmail.com' {...register('email')}/>
              <i className='text-red-500 h-5 text-sm'>{errors.email?.message}</i>
            </div>
            <div className="input-grp text-md flex flex-col mb-1">
              <label htmlFor="password" className='mb-1'>Password</label>
              <input type="password" id='password' className='px-2 py-1 rounded-sm placeholder:italic outline-none' placeholder='***** ' {...register('password')}/>
              <i className='text-red-500 h-5 text-sm'>{errors.password?.message}</i>
            </div>
            <div className="input-grp text-md flex flex-col mb-1">
              <label htmlFor="confirm" className='mb-1'>Confirm password</label>
              <input type="password" id='confirm' className='px-2 py-1 rounded-sm placeholder:italic outline-none' placeholder='*****' {...register('confirmpassword')}/>
              <i className='text-red-500 h-5 text-sm'>{errors.confirmpassword?.message}</i>
            </div>
            <div className='flex flex-row justify-center'>
             <button className='bg-black text-md px-4 py-1 text-white my-1 rounded-sm'>Log in</button>
           </div>
            <p className='text-md text-center'>You don't have an account? <Link to='/register' className='!no-underline'>Register</Link></p>
      </form> 
       <h1 className='text-center font-bold text-xl my-4'>OR</h1>
      <GoogleButton
  onClick={handleSignInWithGoogle}
  className='sm:mb-8'
/>
<ToastContainer className='w-24 px-4 shadow-none mt-3' />
    </div>
  )
}

export default Login