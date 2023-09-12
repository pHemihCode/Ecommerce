import React from 'react'
import Last from '../assets/Last.jpg'
function BeforeFooter() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 sm:items-center px-3 sm:px-5 py-5 bg-slate-100 w-full lg:mx-7'>
        <div className='w-full h-64 lg:h-full'>
          <img src={Last} alt="" className='w-full h-full object-cover' />
        </div>
        <div className=''>
            <h2 className='text-2xl font-bold '>New arrivals!</h2>
            <p className='text-md '>
                Subscribe to our newsletter and stay updated on the latest trends, product 
                launches and special offers
            </p>
            <p className='text-md'>
              Thank you for choosing MAFIA for you diffrent type of products. 
            </p>
            <div className='my-3 w-full flex flex-row'>
              <input type="email" className='border-1 w-full py-1 px-2 outline-none placeholder:italic' placeholder='abc@gmail.com' required/>
              <button type='submit' className='text-md px-3 py-1 text-white bg-black hover:duration-500 hover:opacity-50'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default BeforeFooter
