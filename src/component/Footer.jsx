import React from 'react'
import {SlSocialInstagram, SlSocialYoutube} from 'react-icons/sl';
// import TiSocialTumbler from 'react-icons/Ti';

const Footer = () => {
  return (
    
    <div className='bg-blue-300  h-[60px]  my-5 '>
      <div className='max-w-[1240px] flex mx-auto gap-2'>
        <div className='font-bold text-red-700 text-center py-3 text-25px'> <SlSocialInstagram  className='text-red-800 text-[25px] font-bold'/> </div>
        <div className='font-bold text-red-700 text-center py-3 text-25px'><SlSocialYoutube className='text-red-800 text-[25px] font-bold' /> </div>
       
      </div>
    </div>  )
}

export default Footer
