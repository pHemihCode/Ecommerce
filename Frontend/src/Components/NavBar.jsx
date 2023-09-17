import React,{useState, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FcFlashOn } from "react-icons/fc";
import { useSelector } from 'react-redux';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import CurrentUser from './CurrentUser';
import MobileNav from './MobileNav';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NavBar() {
  const theUser = CurrentUser()
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const cart = useSelector(state => state.cart.cart)
  const notify = () => toast.success("Logged out successfully");
  const SignOut =()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
      notify()
    }).catch((error) => {
      // An error happened.
    });
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className=''>
      <div className='fixed top-0 z-20 w-full bg-white h-28'>
      <div className='bg-black text-center text-slate-200'>
        <p className='italic py-2 text-sm'><FcFlashOn className='inline' /> FREE SHIPPING ON OTHERS MORE THAN $100 <FcFlashOn className='inline' /></p>
      </div>
       <nav className='px-2 lg:flex flex-row justify-between items-center'>
          <div className='flex flex-row space-x-2 items-center sm:pl-5 lg:w-1/4'>
            <MobileNav />
            <Link to='/'>
            <h1 className='text-4xl font-bold'>MAFIA</h1>
            </Link>
          </div>
          <div className='thenav text-xl hidden lg:flex lg:flex-row lg:space-x-8 lg:w-full lg:justify-center'>
            <Link to='/' onClick={scrollToTop}>Home</Link>
            <Link to='products'>Products</Link>
            <Link to='contact'>Contact</Link>
          </div>
           <div className='relative bottom-10 lg:bottom-0 lg:w-1/4'>
              <div className='flex space-x-3 float-right text-2xl sm:pr-5 sm:text-3xl'>
                  <div className='flex flex-row items-center' ref={target} onClick={() => setShow(!show)}>
                  <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                      {
                        theUser ? 
                        <div>
                           <div>
                              {
                                theUser?.photoURL ? <img src={theUser.photoURL} alt={theUser.displayName} className='w-15 h-15 mx-auto my-3 rounded-full' />
                                :  <FaRegUserCircle className='' />
                              }
                            </div>
                              <p className='text-md sm:text-xl'>{theUser?.displayName}</p>
                              <p className='mt-3 text-m'>{theUser?.email}</p>
                              <button onClick={SignOut} className='border-2 w-24 mx-auto py-1 rounded-md mb-3 text-white' >Sign Out</button>
                        </div> :
                         <div>
                          <button onClick={() => navigate('/login')} className='border-2 w-24 mx-auto py-1 rounded-md my-3 text-white'>Log In</button>
                         </div>
                      }
                      </Tooltip>
                    )}
                  </Overlay>
                    <p className='text-sm sm:text-md lg:text-md font-bold m-0 pr-1'>{theUser ? theUser.displayName : <Link to='/login'>Log in</Link>}</p>
                   {
                    theUser?.photoURL ? <img src={theUser.photoURL} alt={theUser.displayName} className='w-6 h-6 sm:w-7 sm:h-7 rounded-full' />
                     :  <FaRegUserCircle className='' />
                   }
                  </div>
                 <div className='relative'>
                  {
                    cart.length > 0 && <span className='notifi absolute bg-red-500 w-3 right-0 sm:left-4 sm:bottom-6 h-3 bottom-5 rounded-full'></span>
                  }
                 <Link to='/cart'>
                    <FiShoppingCart />
                  </Link>
                 </div>
               </div>
           </div>
        </nav>
        <ToastContainer className='w-24 px-4 shadow-none mt-3' />
      </div>
        <Outlet />
    </div>
  )
}

export default NavBar