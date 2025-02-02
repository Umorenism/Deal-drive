import React from 'react'
import { motion } from 'framer-motion'
import GlobalCard from '../headerModelComponent/GlobalCard'
import pic from '../assets/imagePexel.jpg'
import { FaArrowRight } from 'react-icons/fa'

const Adaptive = () => {
  const whyData = [
    {
      title: "How Deal Drive Work",
      des: "DealDrive simplifies your sales journey with smart tools, seamless automation, and data-driven insights to close deals faster."
    },
  ]

  return (
    <motion.div
      className='grid grid-flow-col gap-10 grid-cols-2 w-full bg-white rounded-md p-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className='text-3xl font-bold text-start text-slate-700'>Adaptive Hiring Overview</h1>
          <p className='text-start mb-5'>
            Empowering businesses with dynamic, data-driven recruitment strategies for a future-ready workforce.
          </p>
          <button className='mt-20 flex items-center text-start nb-4'>
            Learn <FaArrowRight />
          </button>
        </motion.div>

        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {whyData.map((data, index) => (
          <motion.div
            key={index}
            className='flex mt-10 items-center text-start gap-4'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
          >
            <p className='h-20 w-[0.01rem] bg-slate-400 mb-2 '></p>
            <div>
              <h1 className='text-xl text-slate-500 font-bold'>{data.title}</h1>
              <p className='text-slate-500 text-wrap'>{data.des}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <GlobalCard image={pic} title="Adaptive Hiring" description="Successful Manage Remote Teams." />
      </motion.div>
    </motion.div>
  )
}

export default Adaptive
