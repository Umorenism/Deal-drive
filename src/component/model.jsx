import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
const Model = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // const handleLinkClick = () => {
    //     setIsModalOpen(true); 
    //   };
    
  return (
    <div>
      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Link Clicked!</h2>
              <p>You clicked on a link that opens this modal. You can perform any actions here.</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Model
