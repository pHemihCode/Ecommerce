import React from 'react'
import Card from './Card'
import Spinner from 'react-bootstrap/Spinner';

import {useProductsAPI} from '../utils/useProductsAPI'
function ProductDisplay({products}) {
    const { isLoading, error, data} = useProductsAPI()
    if(isLoading){
        return(
          <div className='flex flex-row justify-center items-center px-2 h-20 mt-10 text-2xl italic'><span>MAFIA loading your store...</span><Spinner animation="border" /></div>
        )
      }
      if(error){
        return(
          <div className='flex flex-col text-xl items-center justify-center h-96'>
            <h1>Oops!</h1>
            <p className='capitalize'>{error.message}</p>
          </div>
        )
      } 
  return (
    <div className='px-2 sm:mx-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 xl:grid-cols-4 lg:mx-7'>
    {
        products.map((product) => (
            <div key={product._id}>
                <Card brand={product.brand} 
                category={product.category} 
                description={product.description} 
                image={product.image} 
                oldPrice={product.oldPrice} 
                price={product.price} 
                title={product.title}  
                id={product._id}
                rating={product.rating} />
            </div>
        ))
    }
</div>
  )
}

export default ProductDisplay