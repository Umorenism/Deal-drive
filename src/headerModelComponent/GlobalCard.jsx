import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Card = ({ image, title, description }) => {
   
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-start bg-white transition-all duration-300 group-hover:bg-[#173B3F]">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">
          {title}
        </h2>
        <p className="text-black font-bold text-3xl mb-4 transition-colors duration-300 group-hover:text-white">
          {description}
        </p>
        <button className="flex items-center text-slate-500 hover:text-blue-700 font-medium transition-colors duration-300 group-hover:text-white">
          Learn More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Card;
