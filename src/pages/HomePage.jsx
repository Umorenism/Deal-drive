// import React, { useState, useEffect } from "react";
// // import Tech from "./Tech";
// // import Navbar from "../component/Header";
// // import Hire from "./Hire";
// // import Card from "./Card";
// // import SliderCard from "../component/SliderCard";
// // import Works from "./Works";
// // import Demo from "../pages/Demo";
// // import AiCard from "./AICard";
// // import AiReady from "./AIReady";
// // import HomeCard from "./HomeCard";
// // import DoubleCard from "./DoubleCard";

// const HomePage = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [counts, setCounts] = useState([0, 0, 0, 0]); // Initial count state

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const stats = [
//     { value: 150000, description: "Top-rated, highly skilled global talent pool" },
//     { value: 80000, description: "Cost savings per talent hired through Andela" },
//     { value: 66, description: "Faster time to hire" },
//     { value: 33, description: "Faster project delivery" },
//   ];

//   // Function to animate count
//   useEffect(() => {
//     const durations = [2000, 2000, 1500, 1500]; // Duration for each count animation
//     stats.forEach((stat, index) => {
//       let start = 0;
//       const end = stat.value;
//       const increment = Math.ceil(end / (durations[index] / 50)); // Adjust speed
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           start = end;
//           clearInterval(timer);
//         }
//         setCounts((prevCounts) => {
//           const newCounts = [...prevCounts];
//           newCounts[index] = start;
//           return newCounts;
//         });
//       }, 50);
//     });
//   }, []);

//   return (
//     <>
     
//       <div className="relative w-full h-[calc(100vh-5rem)] md:h-screen overflow-hidden">
//         {!isMobile ? (
//           <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
//             <source src="https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img
//             src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt="Static Image"
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//         )}

//         <div className="absolute inset-0 bg-black bg-opacity-60 mt-32 flex items-center justify-center p-6 w-full md:mt-0">
//           <div className="text-white max-w-[1200px] w-full text-center md:text-start">
//             <div className="mt-[200px]">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
//               Adaptive Hiring Lets You Put Every Project on the Front Burner
//             </h1>
//             <p className="text-lg md:text-xl mb-12 max-w-[100%] mx-auto">
//               There are more than 150,000 highly skilled tech professionals on our roster.
//               Most in largely untapped markets. Ready to be placed quickly and effectively.
//             </p>

//             </div>
//             <div className="mb-24 flex  md:flex-row items-center md:items-start gap-4">
//   <button className="px-5 py-4 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition  md:mb-0">
//     Hire Talent
//   </button>
//   <p className="text-lg cursor-pointer hover:underline  md:mt-0 md:ml-6">
//     What is Adaptive Hiring?
//   </p>
// </div>

// <div
//   className={`mt-10 p-4 md:p-0 w-full ${
//     isMobile ? "grid grid-cols-1 gap-6 px-6" : "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-6"
//   }`}
// >
//   {stats.map((stat, index) => (
//     <div key={index} className="flex items-center mb-4 gap-4">
//       <div className="w-1 h-16 bg-slate-100"></div>
//       <div>
//         <h1 className="text-2xl md:text-3xl font-bold text-white">
//           {counts[index].toLocaleString()} {index === 1 ? "$" : ""}
//         </h1>
//         <h2 className="text-sm text-gray-300">{stat.description}</h2>
//       </div>
//     </div>
//   ))}
// </div>


//           </div>
//         </div>
//       </div>

    
//     </>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from 'react';
import Tech from './Tech';
import Hire from './Hire';
import Card from './Card';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]); // Initial count state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize on mount
    handleResize();
    
    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  //   // Function to animate count
   useEffect(() => {
     const durations = [2000, 2000, 1500, 1500]; // Duration for each count animation
     stats.forEach((stat, index) => {
       let start = 0;
      const end = stat.value;
       const increment = Math.ceil(end / (durations[index] / 50)); // Adjust speed
       const timer = setInterval(() => {
         start += increment;
         if (start >= end) {
           start = end;
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
   const stats = [
        { value: 150000, description: "Top-rated, highly skilled global talent pool" },
        { value: 80000, description: "Cost savings per talent hired through Andela" },
       { value: 66, description: "Faster time to hire" },
        { value: 33, description: "Faster project delivery" },
     ];

  return (
    <>
    <div className="bg-slate-600  min-h-screen relative overflow-hidden">
      {/* Video for Desktop */}
      {!isMobile ? (
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4" />
        </video>
      ) : (
        // Image for Mobile
        <img
          src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Static Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay with Content */}
      <div className="absolute inset-0  flex-col bg-black bg-opacity-50 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10 md:w-[60%] md:text-start mt-20 md:mt-10">
          Adaptive Hiring Lets You Put Every Project on the Front Burner
          </h1>
          <p className="text-lg md:text-xl mb-8 w-full md:text-start md:w-[60%]  ">
          There are more than 150,000 highly skilled tech professionals on our roster. Most in largely untapped markets. Ready to be placed quickly and effectively.
          </p>
          <div className='w-full text-start gap-3 flex items-center'>
          <button className="px-6 py-3 flex gap-2 bg-indigo-500 rounded-md text-lg font-bold hover:bg-indigo-600 transition">
            Hire Talent 
          </button>
          <p>What is adaptive Hiring</p>
          </div>
        </div>
        <div className='md:mt-44 mt-10 w-full flex items-center justify-center '>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full md:max-w-[1600px] gap-3'>
         {stats.map((stat, index)=>(
          
          <div key={index} className="flex items-center mb-4  gap-4">
                 <div className="w-1 h-16 bg-slate-100"></div>
                 <div>
                   <h1 className="text-2xl md:text-3xl font-bold text-white">
                   {counts[index].toLocaleString()} {index === 1 ? "$" : ""}
                  </h1>
                <h2 className="text-sm text-gray-300">{stat.description}</h2>
                </div>
            
             </div>
         ))}
          </div>
        </div>
      </div>
    </div>
    <Tech/>
    <Hire/>
    <div>
      <Card/>
    </div>
    </>
  );
};

export default HomePage;

