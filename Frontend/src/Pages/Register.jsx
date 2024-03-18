import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    fullname: yup.string().required("Input your fullname"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(5, "too short")
      .max(20, "too long"),
    email: yup.string().email().required("Input your email!"),
    password: yup
      .string()
      .required("Input your password")
      .min(8, "Your password is too short"),
    confirmpassword: yup
      .string()
      .required("Input cannot be empty")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    //  e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mb-3 w-full px-2 relative top-36">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="p-3 rounded-md w-4/5 sm:w-3/5 sm:mb-8 lg:w-1/4"
      >
        <div className="input-grp text-md flex flex-col mb-1">
          <label htmlFor="fname" className="mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fname"
            className="px-2 py-1 rounded-sm placeholder:italic outline-none"
            placeholder="Full name... "
            {...register("fullname")}
          />
          <i className="text-red-500 h-5 text-sm">{errors.fullname?.message}</i>
        </div>
        <div className="input-grp text-md flex flex-col mb-1">
          <label htmlFor="phone" className="mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="px-2 py-1 rounded-sm placeholder:italic outline-none"
            placeholder="+234... "
            {...register("phone")}
          />
          <i className="text-red-500 h-5 text-sm">{errors.phone?.message}</i>
        </div>
        <div className="input-grp text-md flex flex-col mb-1 ">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-2 py-1 rounded-sm placeholder:italic outline-none"
            placeholder="abc@gmail.com"
            {...register("email")}
          />
          <i className="text-red-500 h-5 text-sm">{errors.email?.message}</i>
        </div>
        <div className="input-grp text-md flex flex-col mb-1">
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="px-2 py-1 rounded-sm placeholder:italic outline-none"
            placeholder="***** "
            {...register("password")}
          />
          <i className="text-red-500 h-5 text-sm">{errors.password?.message}</i>
        </div>
        <div className="input-grp text-md flex flex-col mb-1">
          <label htmlFor="confirm" className="mb-1">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm"
            className="px-2 py-1 rounded-sm placeholder:italic outline-none"
            placeholder="*****"
            {...register("confirmpassword")}
          />
          <i className="text-red-500 h-5 text-sm">
            {errors.confirmpassword?.message}
          </i>
        </div>
        <div className="input-grp">
          <input type="checkbox" className="mr-1" />
          <label htmlFor=""> I agree to the terms and conditions</label>
        </div>
        <div className="flex flex-row justify-center">
          <button className="bg-black text-md px-3 py-1 text-white my-3 rounded-sm">
            Register
          </button>
        </div>
        <p className="text-md text-center">
          You already have an account?{" "}
          <Link to="/login" className="!no-underline">
            Login In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
