import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import GlobalCard from '../headerModelComponent/GlobalCard'
import pic from '../assets/imagePexel.jpg'

const Platform = () => {
  const whyData = [
    { title: "Qualified by Deal Drive", des: "We don't just find the best talent, we cultivate it" },
    { title: "Deal Drive Pay", des: "The talent you need is in untapped emerging markets" },
    
  ]
  const Data = [
    { title: "Deal Drive Connect", des: "Empowering Connections, Driving Results – Deal Drive Connect." },
   
   
  ]

  return (
    <motion.div
      className='grid grid-flow-col gap-10 grid-cols-4 w-full bg-white rounded-md p-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='text-start'>
        <motion.h1
          className='text-4xl text-slate-600 font-bold mb-4'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
           DealDrive Talent Clouds
        </motion.h1>

        <motion.p
          className='text-slate-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         The only AI-Powered platform you need for simplified global tech Hiring
        </motion.p>

        <motion.button
          className='flex gap-2 items-center mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Learn More <FaArrowRight />
        </motion.button>

        
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h1>PRODUCTS</h1>
        {whyData.map((data, index) => (
          <motion.div
            key={index}
            className='flex items-center text-start gap-4'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          >
            <p className='h-20 w-[0.01rem] bg-slate-400 mb-2'></p>
            <div>
              <h1 className='text-xl text-slate-500 font-bold'>{data.title}</h1>
              <p className='text-slate-500'>{data.des}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h1>INTEGRATIONS</h1>
        {Data.map((data, index) => (
          <motion.div
            key={index}
            className='flex items-center text-start gap-4'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          >
            <p className='h-20 w-[0.01rem] bg-slate-400 mb-2'></p>
            <div>
              <h1 className='text-xl text-slate-500 font-bold'>{data.title}</h1>
              <p className='text-slate-500'>{data.des}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <GlobalCard image={pic} title="Insight" description="Five Steps to build a successful Global Team." />
      </motion.div>
    </motion.div>
  )
}

export default Platform
