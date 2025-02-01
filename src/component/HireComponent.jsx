import React, { useEffect, useState } from "react";
import axios from "axios";

const HireComponent = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const token = localStorage.getItem("token"); // Authentication Token
  const [counts, setCounts] = useState([0, 0, 0, 0]);
   


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:6001/api/auth/country-list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) {
          setCountries(
            Object.entries(response.data).map(([code, name]) => ({
              code,
              name: name,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching country list:", error);
      }
    };

    if (token) {
      fetchCountries();
    }
  }, [token]);


  const stats = [
    { value: 150, description: "Top rated, highly skilled global talent" },
    { value: 33, description: "Faster project delivery" },
    { value: 66, description: "Faster time to hire" },
    
  ];


  // Function to animate count
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D8ECE9] px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Left Section - Content */}
       <div className="flex flex-col justify-center md:justify-start mt-[500px] md:mt-0 text-center md:text-left relative">
  <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight mt-44">
    Request A Demo
  </h1>
  <p className="text-lg mb-5 text-black max-w-lg mx-auto md:mx-0">
    Experience the future of global tech hiring with a personalized demo of Andela Talent Cloud.
    Our AI-powered platform streamlines everything from sourcing to payouts, helping you build
    high-performing, borderless tech teams with ease.
  </p>

  {/* Stats Section */}
  <div className="absolute md:relative bottom-0 w-full flex justify-center md:justify-start ">
    <div className="flex gap-8 md:gap-16">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-4">
          {/* Vertical Divider */}
          <div className="w-1 h-16 bg-black"></div>
          
          {/* Stat Content */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-black">
              {counts[index].toLocaleString()} {index === 0 ? "$" : "%"}
            </h1>
            <h2 className="text-sm text-black">{stat.description}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="mt-6">
    <img src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/66f4489d0ee5b6674d819f77_G2%20Fall%202024%20Demo%20Page%20(1).svg" alt="" />
  </div>
</div>


        {/* Right Section - Hiring Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mt-24 mb-20">
          <h2 className="text-xl font-semibold mb-6 text-center">Hire Talent</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Work Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium">Company Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block font-medium">Job Title</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job title"
              />
            </div>

            <div>
              <label className="block font-medium">Country</label>
              <select
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block font-medium">Job Description</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Enter job description"
              />
            </div>

            <div className="flex items-start space-x-2 mt-6">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                I UNDERSTAND THAT ANDELA WILL PROCESS MY INFORMATION IN ACCORDANCE WITH THEIR TERMS OF USE.
                I MAY WITHDRAW MY CONSENT THROUGH UNSUBSCRIBE LINKS AT ANY TIME.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0FDDCC] text-white py-3 rounded-lg hover:bg-[#0FDDCC] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireComponent;
