import React from 'react'

const Cards = () => {
  return (
    <div className='py-[100px] max-w-[1240px] mx-auto '>
        <div className='md:grid grid-cols-3 gap-6'>
        <div className='shadow-lg hover:scale-105 duration-500 text-center'><h2 className='font-bold my-3'>Web Devlopment</h2>
        <span className='font-bold text-[20px]'>$15
        </span>
        <p className='py-2 mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit non ea ullam autem dolorum!</p>
        <button className='bg-lime-500 p-3 mx-3 mt-10  rounded-lg text-white' >Start Trail</button>
            <br />
        </div>
        <div className='shadow-lg my-3 hover:scale-105 duration-500 text-center  text-[]'><h2 className='font-bold'>Digital Marketing</h2>
        <h1  className='font-bold my-3'>$49</h1>
        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam eius dolor voluptatum non ipsa facilis ex sit corporis volu</p>
        <button className='bg-gray-800 p-3 mx-3 my-4  rounded-lg text-white' >Start Trail</button>
            <br /></div>
        
            <div className='shadow-lg hover:scale-105 duration-500 text-center'><h2 className='font-bold my-3'>Cyber Security</h2>
        <span className='font-bold text-[20px]'>$15
        </span>
        <p className='py-2 mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit non ea ullam autem dolorum!</p>
        <button className='bg-lime-500 p-3 mx-3 mt-10  rounded-lg text-white' >Start Trail</button>
            <br />
        </div>
      
        </div>
    </div>
  )
}

export default Cards
