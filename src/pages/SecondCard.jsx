import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const cardData = [
  {
    title: "APPLICATION ENGINEERING",
    description: "Growing market share, end-to-end Hiring service",
    bgImage: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600", 
    content:"We ensure on time, on budget "
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description: "Innovative solutions for businesses",
    bgImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600", 
    content:"We ensure on time, on "
  },
  {
    title: "DIGITAL MARKETING",
    description: "Boost your brand presence online",
    bgImage: "https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&w=600", 
    content:"We ensure on time, on budget "
  },
  {
    title: "UX/UI DESIGN",
    description: "Crafting exceptional user experiences",
    bgImage: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600", 
    content:"We ensure on time, on "
  },
]

const SecondCard = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="flex mt-4 flex-col w-full items-center p-5 justify-center bg-white ">
      <div className="relative w-full overflow-hidden">
        {/* Scrollable wrapper using Framer Motion */}
        <motion.div
          className="flex space-x-10 whitespace-nowrap w-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
                <motion.div
                className="relative w-full h-auto rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                
                {/* Image */}
                <motion.img
                key={index}
                  src={card.bgImage}
                  alt="Card Image"
                  className="w-full h-[200px] object-cover rounded-md"
                  animate={{ scale: hovered ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}

                />
           
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gray-950 bg-opacity-60 flex flex-col items-center justify-center text-white p-4 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                 <p>{card.content}</p>
                </motion.div>
              </motion.div>
           
              
            ))}
            
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SecondCard
