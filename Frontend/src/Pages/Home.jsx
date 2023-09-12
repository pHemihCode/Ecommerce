import React, { useEffect, useState } from 'react'
import ProductDisplay from '../Components/ProductDisplay'
import CarouselComp from '../Components/CarouselComp'
import BeforeFooter from '../Components/BeforeFooter'
import Footer from '../Components/Footer'
import { FaSearch } from "react-icons/fa";
import { useProductsAPI } from '../utils/useProductsAPI'

function Home() {
 const [search, setSearch] = useState('')
 const {data} = useProductsAPI()
 const [showCarousel, setShowCarousel] = useState(false) //This is just to remove the carousel when there is a search
 const [filteredData, setFilteredData] = useState([]) //Collected the data from the custom component and store it in an array
 const [noMatchingCategories, setNoMatchingCategories] = useState(false); // State to track no matching categories
 
 //Code below is used to filter the data collected, it was tricky to get to this point trust me!!!
 const theFilter = () => {
  if (data) {
    const newFilteredData = data.filter(product =>
      search === '' || product.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(newFilteredData); // Use all data when search is empty
    setNoMatchingCategories(search !== '' && newFilteredData.length === 0);
   if(search === ''){
    setShowCarousel(false)
   }else{
    setShowCarousel(true)
   }
  }
 }
 const handleSearch = () => {
   theFilter()
}
useEffect(()=>{
   theFilter()
},[search])
//I sent the data to the productDisplay component conditionally 
  return (
    <div className='relative top-36'>
      <div className='px-2 mb-4'>
            <div className='w-full flex sm:justify-center sm:mx-auto'>
              <input type="search" value={search} onChange={(e) =>setSearch(e.target.value)} className='border-2 rounded-l-md outline-none w-full sm:w-1/2 lg:w-1/4 sm:py-2 placeholder:italic px-2 py-1' placeholder='What are you looking for?' />
               <button onClick={handleSearch} className='px-2 bg-slate-300 font-bold rounded-r-md'><FaSearch /></button>
            </div>
       </div>
      <div className={showCarousel ? 'hidden' : 'flex flex-row justify-center items-center w-full'}>
         <h1 className='font-bold italic text-2xl'>Welcome to MAFIA store!</h1>
      </div>
      <div className={showCarousel ? 'hidden' : 'hidden sm:flex'}>
        <CarouselComp/>
      </div>
      {
        noMatchingCategories ? <p className='italic flex flex-row justify-center items-center px-2 text-2xl h-60'>Your search is not found!</p> : <ProductDisplay products={search === '' ? data : filteredData} />
      }
    <div  className={showCarousel ? 'hidden' : 'flex'}>
      <BeforeFooter />
    </div>
     <div  className={showCarousel ? 'hidden' : 'flex'}>
       <Footer />
     </div>
    </div>
  )
}

export default Home