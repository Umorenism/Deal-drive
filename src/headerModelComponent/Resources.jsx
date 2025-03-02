import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io"
import pic from '../assets/imagePexel.jpg'
import GlobalCard from '../headerModelComponent/GlobalCard'

const Resources = () => {
  const solFun = [
    { title: "BLOG" },
    { title: "INFOGRAPHICS" },
    { title: "WEBINAR" },
    { title: "E-BOOK" },
    { title: "WHITE PAPPER" },
  ]

  const caseFun = [
    { title: "CASE STUDIES" },
    { title: "CUSTOMERS STORIES" },
    { title: "VIDEOS" },
    { title: "HUMAN OF DEAL DRIVE" },
    { title: "PROFILES IN BRILLIANCES" },
  ]

  return (
    <motion.div
      className='grid grid-flow-col gap-10 grid-cols-4 w-full bg-white rounded-md p-4'
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
         Resources Center
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
          className='flex gap-2 items-center mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          View all resources <FaArrowRight />
        </motion.button>

      
       
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
       
        {solFun.map((d, index) => (
          <motion.div
            key={index}
            className='flex text-start mt-5 space-x-4 mb-4'
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
       
        {caseFun.map((d, index) => (
          <motion.div
            key={index}
            className='flex text-start mt-5 space-x-4 mb-4'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 + index * 0.2 }}
          >
            <IoIosArrowForward />
            <p>{d.title}</p>
          </motion.div>
        ))}
      </motion.div>
      <GlobalCard image={pic} title="Insight" description="Five Steps to build a successful Global Team." />
    </motion.div>
  )
}

export default Resources
