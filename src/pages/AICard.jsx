import React from 'react'

import {motion} from "framer-motion"
const AiCard = () => {
  return (
    <div className='w-full flex min-h-[300px] justify-center items-center p-4'>
      <div className='bg-[#1B454A] h-auto rounded-lg md:max-w-[1600px]  w-full py-8 px-6 grid grid-cols-1 items-center '>
        
        {/* Left Content */}
        <div className='flex flex-col justify-center items-center text-white px-4'>
          <h1 className=' md:text-5xl font-bold pl-5 text-white'>Harness the power of people + AI</h1>
          <p className='mt-4 pl-5 text-lg md:text-xl text-white'>Andela Talent Cloud automates and streamlines the complete global hiring lifecycle. The Talent Decision Engine uses proprietary AI matching algorithms to identify best-fit candidates at speed and scale. Expert technical hiring managers, and talent and client success partners support the entire process to ensure a seamless experience.</p>
          <button className='mt-6 pl-5 mb-4 bg-indigo-500 text-white px-6 py-4 rounded-md text-lg font-semibold shadow-md hover:bg-gray-200 transition md:w-[30%]'>
            Request a Demo </button>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center mt-4">
          <motion.img
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          whileHover={{ scale: 1.05 }}
          src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665983c2765877d319c3358a_People%20and%20AI-Powered%20%20Technology%20Ensure%20Success.webp" alt="Demo" className='w-full md:h-[500px] p-4 object-cover rounded-md' />
        </div>

      </div>
    </div>
  )
}

export default AiCard
