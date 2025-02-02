import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import GlobalCard from '../headerModelComponent/GlobalCard'
import pic from '../assets/imagePexel.jpg'

const WhyDealdrive = () => {
  const whyData = [
    { title: "Our Talent Community", des: "We don't just find the best talent, we cultivate it" },
    { title: "Untapped Talent Markets", des: "The talent you need is in untapped emerging markets" },
    { title: "Mission Focus", des: "Dealdrive talent improves their career trajectories and quality of life" },
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
          className='text-2xl text-slate-600 font-bold mb-4'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why DealDrive
        </motion.h1>

        <motion.p
          className='text-slate-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Deal Drive Technology, we revolutionize the way businesses connect with top talent through innovative solutions, adaptive hiring strategies, and a seamless platform designed to drive growth and success.
        </motion.p>

        <motion.button
          className='flex gap-2 items-center mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Learn More <FaArrowRight />
        </motion.button>

        <motion.div
          className='mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665a686cac4ba590aeda2c34_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPage-dd.avif"
            alt=""
            className='rounded-md'
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
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
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <GlobalCard image={pic} title="Insight" description="Five Steps to build a successful Global Team." />
      </motion.div>
    </motion.div>
  )
}

export default WhyDealdrive
