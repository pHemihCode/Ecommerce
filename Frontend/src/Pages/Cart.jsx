import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, increaseQty, decreaseQty, clearCart } from '../Redux/Slices/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js"; 
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../Components/CheckoutForm';
import CurrentUser from '../Components/CurrentUser';

function Cart() {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState("");
  const User = CurrentUser()
  const [pay, setPay] = useState(true)
  const products = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const notify = () => toast.success("Item removed!", {
    position: toast.POSITION.TOP_RIGHT
}); 
  const notify2 = () => toast.success("Items removed!", {
    position: toast.POSITION.TOP_RIGHT
})
const notify3 = () => toast.error("You are not logged in!", {
  position: toast.POSITION.TOP_RIGHT
})

useEffect(() => {
  // Recalculate the total when the cart changes
  let updatedTotal = 0;
  for (const product of products) {
    updatedTotal += product.price * product.quantity;
  }
  setTotal(updatedTotal.toFixed(2)); // Update the total state
  setPay(false)
}, [products])
useEffect(()=>{
  async function fetchPublishableKey() {
    try {
      const response = await fetch("http://localhost:5252/config");
      if (!response.ok) {
        throw new Error("Failed to fetch configuration");
      }
      const { publishableKey } = await response.json();
      const stripe = await loadStripe(publishableKey);
      setStripePromise(() => stripe);
    } catch (error) {
      console.log("Error initializing Stripe:", error);
    }
  }
  fetchPublishableKey();
},[])

useEffect(() => {
  fetch("http://localhost:5252/payment-intent", {
    method: "POST",
    body: JSON.stringify({}),
  })
    .then(async (result) => {
      var { clientSecret } = await result.json();
       setClientSecret(clientSecret)
    })
    .catch((error) => {
      console.log("Error fetching payment intent:", error)
    });
}, []);

  if(products.length === 0){
    return(
      <div className='px-2 flex flex-col justify-center items-center w-full relative top-36'>
        <p className='text-xl  my-3'>No item in your cart!</p>
        <Link to='/'>
          <button className='bg-black px-3 py-1 text-white'>Add Items</button>
        </Link>
      </div>
    )
  }

 const handleRemove =(id)=> {
   dispatch(removeItem(id)) 
   notify()
 }
 const handleRemoveAll =()=>{
   dispatch(clearCart())
   notify2()
  }
  
const handleCheckOut =()=>{
  if(!User){
    notify3()
 }
   setPay(!pay)
}

  return (
    <div className='px-2 sm:px-5 relative top-36'>
      {
        products.map((p) => (
          <div key={p._id || p.id} className='p-2 my-5 rounded-sm shadow-xl shadow-slate-100'>
                 <div className='sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-10 sm:h-96 lg:w-3/5'>
                    <div className='w-full sm:w-1/2 h-full overflow-hidden'>
                          <img src={p.image} alt={p.title} className='w-full h-full duration-500 hover:scale-110 object-cover' />
                      </div>
                      <div className='sm:w-1/2'>
                          <h1 className='text-xl font-bold my-3 truncate'>{p.title}</h1>
                          <div className='flex flex-row h-8 space-x-4 text-md'>
                          <span>Price</span>
                            {p.oldPrice && (
                                  <p className='line-through'>${p.oldPrice}</p>
                                )}
                              <p>${(p.price * p.quantity).toFixed(2)}</p>
                          </div>
                        <div className='flex flex-row items-center space-x-4'>
                            <p><span>Quantity</span></p>  &nbsp;
                          <div className='flex flex-row items-center space-x-3'>
                              <p onClick={() => dispatch(increaseQty(p.id || p._id))} className='text-xl font-bold'>+</p>
                                <p className='text-xl text-center'>{p.quantity}</p>
                              <p onClick={() => dispatch(decreaseQty(p.id || p._id))} className='text-xl font-bold'>-</p>
                          </div>
                        </div>
                          <div className='flex flex-row space-x-3'>
                          <button onClick={() => handleRemove(p.id || p._id)}className='bg-red-600 w-28 hover:opacity-50 text-white px-2 py-2 mb-3 rounded-md text-md'>Remove Item</button>
                          </div>
                  </div>
                 </div>
          </div>
        ))
      }
     <div className='flex flex-row space-x-3'>
     <button onClick={handleRemoveAll} className='bg-red-600 rounded-sm mb-5 text-md text-white px-3 py-2'>Remove all</button>
     <Link to='/'>
          <button className='bg-black rounded-sm mb-5 text-md px-3 py-2 text-white'>Add More Items</button>
      </Link>
     </div>
       <div className='lg:w-2/5 lg:absolute lg:top-10 lg:right-0'>
          <p className='text-lg'>Number of selected items = {products.length} </p>
          <p className='text-lg'>Total amount of selected items = ${total}</p>
          <button onClick={handleCheckOut}className='bg-black text-white text-md px-3 py-1 rounded-sm'>Proceed to checkout</button>
      <div className='flex flex-col justify-center py-6 '>
        {
          User && pay && clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )
        }
      </div>
       </div>
      <ToastContainer className='w-24 px-4 shadow-none mt-3' />
    </div>
  )
}

export default Cart