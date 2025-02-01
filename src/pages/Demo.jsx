import React from 'react'
import pic from '../assets/Ddrive filles/dd.jpg'
import {motion} from "framer-motion"
const Demo = () => {
  return (
    <div className='w-full flex min-h-[300px] justify-center items-center p-4'>
      <div className='bg-[#B0D6CE] h-auto rounded-lg md:max-w-[1600px]  w-full py-8 px-6 grid grid-cols-1 md:grid-cols-2 items-center'>
        
        {/* Left Content */}
        <div className='flex flex-col justify-center items-start text-white px-4'>
          <h1 className='text-[#173B3F] md:text-5xl font-bold pl-5'>We Recognize a leader by G2</h1>
          <p className='mt-4 pl-5 text-lg md:text-xl text-[#173B3F]'>The world’s best brands trust Andela, including GitHub, Mastercard Foundry, ViacomCBS, and Mindshare.</p>
          <button className='mt-6 pl-5 bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-gray-200 transition'>
            Request a Demo </button>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center">
          <motion.img
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          whileHover={{ scale: 1.05 }}
          src={pic} alt="Demo" className='w-full md:h-[500px] p-4 object-contain rounded-md' />
        </div>

      </div>
    </div>
  )
}

export default Demo
