import React from "react";
import { motion } from "framer-motion";

const techCompanies = [
  "GITHUB",
  "CLOUDFLARE",
  "MICROSOFT",
  "GOOGLE",
  "AMAZON",
  "NETFLIX",
  "TESLA",
  "FACEBOOK",
];

const Tech = () => {
  return (
    <div className="flex w-full items-center p-5 justify-center bg-white">
      <div className="max-w-[1100px] w-full flex flex-col md:flex-row items-center mt-5">
       
        <div className="text-start">
          <p className="text-lg font-semibold text-gray-700">
            Tech leaders trust
          </p>
          <p className="text-lg font-semibold text-gray-700">
            Andela to quickly source
          </p>
          <p className="text-lg font-semibold text-gray-700">
            qualified talent
          </p>
        </div>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex space-x-10 whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {techCompanies.map((company, index) => (
              <h1
                key={index}
                className="text-2xl font-bold text-blue-600 bg-white px-5 py-2 shadow-md rounded-lg"
              >
                {company}
              </h1>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
