import React from "react";

import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { Link } from "react-router-dom";
import { RegistrationForm } from "./registrationForm";
function Navbar() {
  return (
    <div className='w-screen h-[40px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>All <span className="text-orange-600"> Togher</span>.</h1>
       
      </div>
      <div className='hidden md:flex pr-4'>
        <button className='border-none bg-transparent text-black mr-4'>
         <Link to='/LoginForm' underline='none'>
         
          Sign In
         </Link>
        </button>
        <button className='px-3 py-1 bg-sky-600 rounded-md shadow-xl hover:bg-sky-700 '>
          <Link to='/RegistrationForm' >
          Sign Up
          </Link>
          </button>
      </div>
      
    </div>


  </div>
  );
}

export default Navbar;
