import React, { useState, useEffect } from "react";
import Tech from "./Tech";
import Navbar from "../component/Header";
import Hire from "./Hire";
import Card from "./Card";
import SliderCard from "../component/SliderCard";
import Works from "./Works";
import Demo from "../pages/Demo";
import AiCard from "./AICard";
import AiReady from "./AIReady";
import HomeCard from "./HomeCard";
import DoubleCard from "./DoubleCard";
import Footer from "../component/Footer";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const stats = [
    {
      value: "150K",
      description: "Top-rated, highly skilled global talent pool",
    },
    {
      value: "$80,000",
      description: "Cost savings per talent hired through Andela",
    },
    {
      value: "66%",
      description: "Faster time to hire",
    },
    {
      value: "33%",
      description: "Faster project delivery",
    },
  ];

  return (
    <>
      <Navbar/> 
      <div className="relative w-full h-screen md:min-h-[600px] overflow-hidden">
        {!isMobile ? (
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Static Image"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black bg-opacity-60 mt-20 flex items-center justify-center p-6">
          <div className="text-white max-w-[1200px] w-full text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Adaptive Hiring Lets You Put Every Project on the Front Burner
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-[100%] mx-auto">
              There are more than 150,000 highly skilled tech professionals on
              our roster. Most in largely untapped markets. Ready to be placed
              quickly and effectively.
            </p>
            <div className="flex mb-24 items-center  md:items-start gap-4 mt-5">
              <button className="px-10 py-4 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition">
                Hire Talent
              </button>
              <p className="text-lg cursor-pointer hover:underline mt-2">
                What is Adaptive Hiring?
              </p>
            </div>

            <div
              className={`mt-24 p-4 md:p-0 absolute md:max-w-[1300px] bottom-0 w-full grid ${
                isMobile ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"
              } gap-6 md:gap-10 px-6`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center mb-4 gap-4">
                  <div className="w-1 h-16 bg-slate-100"></div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h1>
                    <h2 className="text-sm text-gray-300">{stat.description}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Tech />
      </div>
   <div>
    <Hire/>
   </div>
   <div>
    <Card/>
   </div>
   <div className="w-full">
    <SliderCard/>
   </div>
   <div className="w-full">
    <Works/>
   </div>
   <div className="w-full">
    <Demo/>
   </div>
   <div className="w-full">
    <AiCard/>
   </div>
   <div className="w-full">
    <AiReady/>
   </div>
   <div className="w-full">
    <HomeCard/>
   </div>
   <div className="w-full">
    <DoubleCard/>
   </div>
      <Footer/>
    </>
  );
};

export default HomePage;
