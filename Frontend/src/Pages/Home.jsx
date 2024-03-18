import React, { useEffect, useState } from "react";
import ProductDisplay from "../Components/ProductDisplay";
import CarouselComp from "../Components/CarouselComp";
import BeforeFooter from "../Components/BeforeFooter";
import Footer from "../Components/Footer";

import { useProductsAPI } from "../utils/useProductsAPI";
import axios from "axios";
function Home() {
  const { data } = useProductsAPI();
  const [showCarousel, setShowCarousel] = useState(false); //This is just to remove the carousel when there is a search

  //I sent the data to the productDisplay component conditionally
  return (
    <div className="relative top-36">
      <div
        className={
          showCarousel
            ? "hidden"
            : "flex flex-row justify-center items-center w-full"
        }
      >
        <h1 className="font-bold italic text-2xl">Welcome to MAFIA store!</h1>
      </div>
      <div className={showCarousel ? "hidden" : "hidden sm:flex"}>
        <CarouselComp />
      </div>
      <div>
        <ProductDisplay products={data} />
      </div>
      <div className={showCarousel ? "hidden" : "flex"}>
        <BeforeFooter />
      </div>
      <div className={showCarousel ? "hidden" : "flex"}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
