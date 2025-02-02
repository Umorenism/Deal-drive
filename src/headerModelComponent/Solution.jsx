import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUserCircle } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io"

const Solution = () => {
  const solFun = [
    { title: "APPLICATION DEVELOPMENT" },
    { title: "DATA SCIENCE & AI" },
    { title: "DATA ENGINEERING & ANALYTICS" },
    { title: "CLOUDS DEVOPS" },
  ]

  const caseFun = [
    { title: "CUSTOM SERVICE DEVELOPMENT" },
    { title: "LEGACY SYSTEM MODERNIZATION" },
    { title: "WEB APP DEVELOPMENT" },
    { title: "GENAI ENGAGEMENT MODELS" },
    { title: "CLOUD MIGRATION" },
  ]

  return (
    <motion.div
      className='grid grid-flow-col gap-10 grid-cols-3 w-full bg-white rounded-md p-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='text-start'>
        <motion.h1
          className='text-3xl text-slate-600 font-bold mb-4'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Flexible Engagement Model
        </motion.h1>

        <motion.p
          className='text-slate-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering Collaboration with a Flexible Engagement Model – Tailored Solutions to Fit Your Needs!
        </motion.p>

        <motion.button
          className='flex gap-2 items-center mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Learn More <FaArrowRight />
        </motion.button>

        <motion.hr
          className='mt-10'
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        <motion.div
          className='mt-10 flex items-center gap-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaUserCircle size={20} className='text-[#0FDDCC]' />
          <p className='text-[#0FDDCC]'>Browse Talent</p>
          <FaArrowRight size={20} className='text-[#0FDDCC]' />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1 className='uppercase font-bold text-xl'>Function</h1>
        {solFun.map((d, index) => (
          <motion.div
            key={index}
            className='flex text-start mt-5 space-x-4 mb-10'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
          >
            <IoIosArrowForward />
            <p>{d.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <h1 className='uppercase font-bold text-xl'>USE CASES</h1>
        {caseFun.map((d, index) => (
          <motion.div
            key={index}
            className='flex text-start mt-5 space-x-4 mb-10'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 + index * 0.2 }}
          >
            <IoIosArrowForward />
            <p>{d.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Solution
