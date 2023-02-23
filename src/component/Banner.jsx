import React from 'react'
import Typed from 'react-typed'
const Banner = () => {
  return (
    <div className='bg-[#c6e2ff] py-[100px] w-full  '>
      <div className='max-w-[1240px] font-bold mx-auto text-center my-[100px] '>
        <div className='text-lg md:text-4xl md:p-[24px] mb-4'>Learn with us</div>
        <h2 className='text-white font-bold text-3xl md:text-[80px]'>Grow with us</h2>
        <div className='text-[20px] md:text-[50px] md:p-[24px] text-white  mt-4'>
        <Typed strings={['Hii,Welcome to our site','Keep learning and keep smiling :)']} typeSpeed={100} loop={true} backSpeed={56} />
        </div>
        <button className='bg-black p-3 rounded-lg text-white' >Get started</button>
      </div>
    </div>
  )
}

export default Banner
