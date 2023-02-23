import React from 'react'
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useState } from 'react';
const Header = () => {
let [toggle,settoggle]=useState(false);
  return (
    <div className='bg-[#c6e2ff] p-4'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center py-[13px]'>
        <div className='text-3xl '>Welcome</div>
       { toggle? <AiOutlineClose onClick={()=>{settoggle(!toggle)}} className='md:hidden text-3xl block'></AiOutlineClose>:
        
        <AiOutlineMenu onClick={()=>{settoggle(!toggle)}} className='md:hidden text-3xl block'></AiOutlineMenu>}
        <ul className='hidden  md:flex text-gray-400 gap-5
        text-3xl
        '>
          <li className=' hover:text-white hover:underline hover:cursor-pointer'>Home</li>
          <li className=' hover:text-white hover:underline hover:cursor-pointer'>Company</li>
          <li className=' hover:text-white hover:underline hover:cursor-pointer'> Resources</li>
           <li className=' hover:text-white hover:underline hover:cursor-pointer'>About</li>
           <li className=' hover:text-white hover:underline hover:cursor-pointer'>contact</li>
        </ul>
        {/* Responsive menu */}
        <ul className={` duration-300 md:hidden fixed bg-black left-[-100%] top-[92px] text-white gap-5 text-3xl w-full h-screen ${toggle? 'left-[0]':'left-[-100%]'}`}>
          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'> Resources</li>
           <li className='p-5'>About</li>
           <li className='p-5'>contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
