import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-white flex flex-col justify-around py-4 w-full">
      <div className="flex flex-col items-center sm:items-start sm:mx-10 lg:mx-32 xl:mx-40">
        <h1 className="text-white text-3xl ">MAFIA</h1>
      </div>
      <div className="footer flex flex-col  items-center gap-5 sm:flex-row sm:justify-around sm:items-start my-4">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-xl">Products</h2>
          <Link to="/">Electronics</Link>
          <Link>Man's Clothing</Link>
          <Link>Woman's Clothing</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">About</h2>
          <Link>About Us</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </div>
        <div className="social flex flex-row space-x-7 text-2xl justify-center my-2">
          <Link>
            <FiFacebook />
          </Link>
          <Link>
            {" "}
            <FiTwitter />
          </Link>
          <Link>
            <FiInstagram />
          </Link>
        </div>
      </div>
      <p className="text-sm text-center mt-5 italic">
        © Copyright 2023 by MAFIA. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
