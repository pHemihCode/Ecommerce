import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full relative top-36">
      <h1 className="text-black text-2xl ">Purchase was successful!✨</h1>
      <Link to="/cart">
        <button className="bg-black text-white text-md px-3 py-1">
          Back to cart
        </button>
      </Link>
    </div>
  );
}

export default Success;
