import React from 'react'
import laptop from'../Assets/img/laptop.jpg'
const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-auto md:my-10 p-3  md:grid grid-cols-2 '>
        <div className=' col-span-1 md:w-[80%]'>
            <img src={laptop} alt="" />
        </div>
        <div className='flex flex-col justify-center col-span-1'>
            <span className='text-[#00df9a] font-bold my-2'>Learn from Experts</span>
            <p className='my-2 text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa labore nobis dignissimos quibusdam inventore ipsam aspernatur dolorum sunt distinctio sequi. Inventore veritatis fugit sapi </p>
            <button className='bg-black p-3 w-[30%] rounded-lg text-white' >Get started</button>
        </div>
      
    </div>
  )
}

export default Experts
