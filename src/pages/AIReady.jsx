import React from 'react'
import { motion } from "framer-motion"
import { FaArrowRight } from 'react-icons/fa'

const AiReady = () => {
  return (
    <div className='w-full flex justify-center items-center p-4 flex-col mt-10'>
      
      {/* Header Section */}
      <div className='flex justify-between items-center md:max-w-[1500px] mb-20 w-full'>
        <h1 className='text-2xl mt-20 md:text-5xl font-bold'>Put Adaptive Hiring to work for you</h1>
        <button className='border mt-20 px-10 py-2 rounded-md border-[#173B3F] hover:bg-[#173B3F] hover:text-white transition'>
          View All Resources
        </button>
      </div>

      {/* Main Card */}
      <div className='group border border-[#1B454A] bg-white hover:bg-[#1B454A] transition-all duration-500 h-auto rounded-lg md:max-w-[1600px] w-full  grid grid-cols-1 md:grid-cols-2 items-start'>

        {/* Left Content */}
        <div className='flex w-[80%] flex-col px-4 transition duration-500 '>
          <h1 className='text-lg font-semibold group-hover:text-white text-start pl-5 mt-5 mb-4'>Digital Transformation</h1>
          <h1 className='text-[#173B3F] md:text-5xl font-bold pl-5 group-hover:text-white transition duration-500 text-start'>
            How to build an AI Ready workforce
          </h1>
          <p className='mt-5 pl-5 text-lg md:text-xl text-[#173B3F] group-hover:text-white transition duration-500 text-start'>
            Learn how to prepare your team for the AI revolution with strategic hiring and training.
          </p>
          <p className='flex gap-2 items-center text-[#173B3F] group-hover:text-white transition duration-500 pl-4 mt-32'>
            READ MORE <FaArrowRight />
          </p>
        </div>

        {/* Right Image with Hover Effect */}
        <div className="flex justify-center h-full">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            src="https://cdn.prod.website-files.com/662a92b5eabc16e9e3bc35d5/6644bab8cced6ad5be3815ce_ForCompanies_DigitalTransformation_How-to-build-an-AI-ready-workforce_Thumbnail-p-800.png"
            alt="Demo"
            className='w-full md:h-[400px] h-full object-cover p-4 rounded-md'
          />
        </div>

      </div>
    </div>
  )
}

export default AiReady
