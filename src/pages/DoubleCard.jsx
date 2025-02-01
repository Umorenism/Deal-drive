import React from 'react';

const DoubleCard = () => {
  return (
    <div 
      className="w-full flex justify-center items-center bg-cover bg-center relative h-[500px] mt-44" 
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c34d918de4b3cbec4a96_Group%2055020.svg')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-700/55 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 text-white h-full">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-start p-8 md:p-12 bg-[#173B3F]">
          <h1 className="text-3xl text-center font-bold">GET STARTED</h1>
          <p className="mt-2 text-lg">Build the tech team of the future with Andela.</p>
          <button className="mt-10 px-10 text-center py-3 bg-indigo-500 rounded-md text-lg font-semibold hover:bg-indigo-600 transition hidden md:block">
            Hire Talent
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center text-start p-8 md:p-12 bg-[#B0D6CE] text-black">
          <h1 className="text-3xl font-bold">SCHEDULE A CALL</h1>
          <p className="mt-2 text-lg">Let us know how we can help.</p>
          <button className="mt-10 px-10 py-3 bg-white rounded-md text-lg font-semibold hover:bg-indigo-600 transition hidden md:block">
            Schedule Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default DoubleCard;
