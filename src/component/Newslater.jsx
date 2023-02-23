import React from 'react'

const Newslater = () => {
  return (
    <div className='bg-blue-300 p-4'>
        <div className='md:flex justify-between max-w-[1240px] mx-auto'>
            <div className='py-6'><h1 className='text-[20px]md:text-[80px] font-bold text-white'>Intersting in Learning new skills ?</h1>
            <span className='text-white'>sign Up to our newsletter</span></div>
            <div className='py-6'><input type="text" className='p-3 mx-2 rounded-lg' placeholder='Email' />
            <button className='bg-black p-3 mx-2 rounded-lg text-white' >Get started</button>
            <br />
            </div>
        </div>
      
    </div>
  )
}

export default Newslater
