


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tech from './Tech';
import Hire from './Hire';
import Card from './Card';
import SliderCard from '../component/SliderCard';
import Works from './Works';
import Demo from './Demo';
import AiCard from './AICard';
import AiReady from './AIReady';
import HomeCard from './HomeCard';
import DoubleCard from './DoubleCard';

import { BsChatDotsFill } from 'react-icons/bs'; // Import a chat icon
import ChatComponent from '../component/ChatMe';

import pic from "../assets/Ddrive filles/profileimg.webp"; // Ensure path is correct
import { FaArrowLeft } from "react-icons/fa";

const images =[
    {
        img:pic
    }
]
const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat modal

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const durations = [2000, 2000, 1500, 1500];
    const stats = [150000, 80000, 66, 33];

    stats.forEach((stat, index) => {
      let start = 0;
      const increment = Math.ceil(stat / (durations[index] / 50));

      const timer = setInterval(() => {
        start += increment;
        if (start >= stat) {
          start = stat;
          clearInterval(timer);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = start;
          return newCounts;
        });
      }, 50);
    });
  }, []);

  // const makeCall = () => {
  //   const phoneNumber = "+1237014970207"; // Replace with actual number
  //   window.location.href = `tel:${phoneNumber}`;
  // };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
        {!isMobile ? (
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4" />
          </video>
        ) : (
          <img
            src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Static Image"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}

        <div className="container mx-auto px-4">
          <div className="absolute inset-0 flex-col bg-black bg-opacity-50 flex items-center justify-center text-white p-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10 md:w-[60%] md:text-start mt-20 md:mt-10">
                Adaptive Hiring Lets You Put Every Project on the Front Burner
              </h1>
              <p className="text-lg md:text-xl mb-8 w-full md:text-start md:w-[60%]">
                There are more than 150,000 highly skilled tech professionals on our roster. Most in largely untapped markets. Ready to be placed quickly and effectively.
              </p>
              <div className="w-full text-start gap-3 flex items-center">
                <Link to="/hire">
                  <button className="px-6 py-3 flex gap-2 bg-indigo-500 rounded-md text-lg font-bold hover:bg-indigo-600 transition">
                    Hire Talent
                  </button>
                </Link>
                <p>What is adaptive Hiring</p>
              </div>
            </div>
            <div className="sm:mt-44 mt-10 container flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 w-full md:max-w-[1400px] gap-3">
                {[150000, 80000, 66, 33].map((stat, index) => (
                  <div key={index} className="flex items-center mb-4 gap-4">
                    <div className="w-[2px] h-16 bg-slate-100"></div>
                    <div className="w-full">
                      <h1 className="text-2xl md:text-3xl font-bold text-white">
                        {counts[index].toLocaleString()} {index === 1 ? "$" : ""}
                      </h1>
                      <h2 className="text-sm text-gray-300">
                        {["Top-rated, highly skilled global talent pool", "Cost savings per talent hired", "Faster time to hire", "Faster project delivery"][index]}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <Tech />
      <Hire />
      <Card />
      <SliderCard />
      <Works />
      <Demo />
      <AiCard />
      <AiReady />
      <HomeCard />
      <DoubleCard />

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <BsChatDotsFill size={24} />
        </button>
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed mt-20 sm:mt-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px] relative">
             {/* Chat Header (Fixed) */}
                  <div className=" absolute top-2 left-2 text-gray-600 hover:text-gray-900">
                  <div className="flex items-center gap-3">
                   <Link to="/">
                   <FaArrowLeft className="cursor-pointer text-xl" />
                   </Link>
                    <img
              src={images && images.img ? images.img : pic} 
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
                    <h1 className="text-lg font-semibold">John Doe</h1>
                  </div>
                    {/* <div className="flex space-x-4">
                      <span onClick={makeCall} className="cursor-pointer text-xl">📞</span>
                     
                    </div> */}
                  </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
           <ChatComponent/>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
