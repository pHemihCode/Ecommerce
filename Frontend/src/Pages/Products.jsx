import React, {useState, useEffect} from 'react'
import {useAPI} from '../utils/useAPI'
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/Slices/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
function Products() {
  //The API to all the stores
  const {walmartQuery, amazonproductsQuery, nextamazonQuery} = useAPI()
  const [brands, setBrands] = useState([])
  const dispatch = useDispatch()
  const notify = () => toast.success("Add to cart");
if(walmartQuery.error || amazonproductsQuery.error || nextamazonQuery.error){
  <p>{error.message}</p>
}
  const handleAddCart =(id,title, image, oldPrice, price)=>{
    dispatch(addtoCart({id,title, image, oldPrice, price }))
    notify()
  }

useEffect(()=>{
    setBrands(amazonproductsQuery.data)
},[amazonproductsQuery.data])

const handleWalmart =()=> {
  setBrands(walmartQuery.data)
}
const handleAmazon =()=> {
  setBrands(amazonproductsQuery.data)
}
const handlenextAmazon =()=> {
  setBrands(nextamazonQuery.data)
}
  return (
    <div className='px-2 pb-5 sm:px-4 relative top-36'>
      <div className='flex flex-row space-x-6 mb-5 justify-center px-2 w-full'>
        <button onClick={handleAmazon} className='px-3 py-1 text-white bg-slate-950'>Amazon </button>
        <button onClick={handlenextAmazon} className='px-3 py-1 text-white bg-slate-950'>Next Amazon</button>
        <button onClick={handleWalmart} className='px-3 py-1 text-white bg-slate-950'>Walmart</button>
      </div>
       <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-4'>
          {brands? (
            brands.map((p) => (
               <div key={p._id || p.id} className='border-2 p-3 lg:p-4 rounded-sm shadow-xl shadow-slate-100  bg-white'>
                  <div className='w-52 h-60 overflow-hidden flex flex-col items-center m-auto'>
                      <img src={p.image} alt={p.title} className='w-full h-full duration-500 hover:scale-110' />
                  </div>
                  <div>
                      <h1 className='text-lg font-bold my-2 truncate'>{p.title}</h1>
                      <div className='flex flex-row space-x-4 text-md'>
                         {p.oldPrice && (
                              <p className='line-through'>${p.oldPrice}</p>
                            )}
                          <p>${p.price}</p>
                      </div>
                  </div>
                  <button onClick={() => handleAddCart(p.id || p._id,p.title, p.image, p.oldPrice, p.price)} className='bg-black hover:opacity-50 text-white px-4 py-1 mb-3 rounded-md text-md'>Add to Cart</button>
                </div>
            ))
          ) : (
            <Spinner animation="border" className='m-3' />
          )}
       </div>
       <ToastContainer className='w-24 px-4 shadow-none mt-3' />
    </div>
  )
}

export default Products
