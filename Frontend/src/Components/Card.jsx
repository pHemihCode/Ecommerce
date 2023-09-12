import React from 'react'
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/Slices/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({rating, title, image, oldPrice, price,id}) {
  const dispatch = useDispatch()
  const notify = () => toast.success("Add to cart");

  const handleAddCart =()=>{
    dispatch(addtoCart({id,title, image, oldPrice, price, rating }))
    notify()
  }
    return (
      <div key={id} className='border-2 p-2 mb-4 sm:my-1 rounded-sm shadow-xl shadow-slate-100'>
        <div className='w-full sm:w-full xl:h-96 h-96 overflow-hidden'>
            <img src={image} alt={title} className='w-full h-full duration-500 hover:scale-110 object-cover' />
        </div>
        <div>
            <h1 className='text-xl font-bold my-1'>{title}</h1>
            <div className='flex flex-row space-x-4 text-md'>
                <p className='line-through'>${oldPrice}</p>
                <p>${price}</p>
            </div>
        </div>
        <button onClick={handleAddCart} className='bg-black hover:opacity-50 text-white px-4 py-1 mb-3 rounded-md text-md'>Add to Cart</button>
        <ToastContainer className='w-24 px-4 shadow-none mt-3' />
      </div>
    );
}

export default Card