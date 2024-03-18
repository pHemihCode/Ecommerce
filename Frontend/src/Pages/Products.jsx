import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import ProductDisplay from "../Components/ProductDisplay";
import { FaSearch } from "react-icons/fa";
function Products() {
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]); //Collected the data from the custom component and store it in an array
  const [noMatchingCategories, setNoMatchingCategories] = useState(true); // State to track no matching categories
  // The API to all the stores
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      // console.log(response.data)
      const products = response.data;
      setBrands(products);
      return products;
    },
  });

  //Code below is used to filter the data collected, it was tricky to get to this point trust me!!!
  const theFilter = () => {
    if (brands) {
      const newFilteredData = brands.filter(
        (product) =>
          search === "" ||
          product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(newFilteredData); // Use all data when search is empty
      setNoMatchingCategories(search !== "" && newFilteredData.length === 0);
    }
  };
  const handleSearch = () => {
    theFilter();
  };
  useEffect(() => {
    theFilter();
  }, [search]);

  return (
    <div className="px-2 pb-5 sm:px-4 relative top-36">
      <div className="px-2 mb-4">
        <div className="w-full flex sm:justify-center sm:mx-auto">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 rounded-l-md outline-none w-full sm:w-1/2 lg:w-1/4 sm:py-2 placeholder:italic px-2 py-1"
            placeholder="What are you looking for?"
          />
          <button
            onClick={handleSearch}
            className="px-2 bg-slate-300 font-bold rounded-r-md"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="display-filtered-items">
        {noMatchingCategories ? (
          <p className="italic flex flex-row justify-center items-center px-2 text-2xl h-60">
            Your search is not found!
          </p>
        ) : (
          <ProductDisplay products={search === "" ? brands : filteredData} />
        )}
      </div>
      <ToastContainer className="w-24 px-4 shadow-none mt-3" />
    </div>
  );
}

export default Products;
