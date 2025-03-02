import React from 'react';
import { motion } from 'framer-motion';

const DoubleCard = () => {
  return (
    <div 
      className="w-full flex justify-center items-center bg-cover bg-center relative h-[500px] mt-44" 
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c34d918de4b3cbec4a96_Group%2055020.svg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 text-white h-full">
        
        {/* Left Section */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="flex flex-col justify-center items-center text-start p-8 md:p-12 bg-[#173B3F]"
        >
          <h1 className="text-3xl text-center font-bold">GET STARTED</h1>
          <p className="mt-2 text-lg">Build the tech team of the future with Andela.</p>
          <div className='flex gap-4'>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              className="mt-10 md:px-10 px-4 py-3 bg-indigo-500 rounded-md text-lg font-semibold hover:bg-indigo-600 transition"
            >
              Hire Talent
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              className="mt-10 md:px-10 px-4 py-3 bg-white text-slate-600 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Schedule Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className="flex flex-col justify-center items-center text-start p-8 md:p-12 bg-[#B0D6CE] text-black"
        >
          <h1 className="text-3xl font-bold">SCHEDULE A CALL</h1>
          <p className="mt-2 text-lg">Let us know how we can help.</p>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            className="mt-10 px-10 py-3 bg-white rounded-md text-lg font-semibold hover:bg-indigo-600 hover:text-white transition hidden md:block"
          >
            Schedule Now
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default DoubleCard;
