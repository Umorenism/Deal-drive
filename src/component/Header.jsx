

import { useState, useEffect, useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import WhyDealdrive from "../headerModelComponent/WhyDealdrive";
import Adaptive from "../headerModelComponent/Adaptive";
import Solution from "../headerModelComponent/Solution";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const modalRef = useRef(null); // Create a reference for the modal content

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalOpen]);

  const navdata = [
    {
      title: "Why Deal Drive",
      content: (
        <div>
          <WhyDealdrive/>
        </div>
      ),
    },
    {
      title: "Adaptive Hiring",
      content: (
        <div>
          <Adaptive/>
        </div>
      ),
    },
    {
      title: "Solution",
      content: (
        <div>
          <Solution/>
        </div>
      ),
    },
    {
      title: "Platform",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Platform</h2>
          <p className="text-gray-700">Seamless and scalable hiring experience for all businesses.</p>
        </div>
      ),
    },
    {
      title: "Resources",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">Valuable Resources center</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>Webinars</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Talent",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Top Talent for Your Business</h2>
          <p className="text-gray-700">Find the best professionals to drive your growth.</p>
        </div>
      ),
    },
    {
      title: "About",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">About Deal Drive</h2>
          <p className="text-gray-700">Revolutionizing talent acquisition through technology.</p>
        </div>
      ),
    },
  ];

  const openModal = (data) => {
    setActiveModal(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveModal(null), 300);
  };

  return (
    <header className={`w-full fixed top-0 z-10 transition-all duration-300 ${scrolling ? "bg-white shadow-md text-blue-500" : "bg-transparent"}`}> 
      <div className="max-w-[1600px] mx-auto px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-3xl gap-3 text-indigo-600 flex items-center">
            <Link to="/">DEALDRIVE</Link>
            <p className="hidden md:flex bg-slate-400 text-sm h-10 w-[0.1rem]"></p>
          </h1>
          <nav className={`hidden md:flex space-x-6 ${scrolling ? "text-black" : "text-white"}`}>
            {navdata.map((data, index) => (
              <button
                key={index}
                onClick={() => openModal(data)}
                className={`text-black text-xl font-medium hover:text-indigo-400 transition-colors ${
                  scrolling ? "text-slate-600" : "text-white"
                }`}
              >
                {data.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <FaRegUserCircle className={`text-xl hidden md:block cursor-pointer hover:text-indigo-500 ${scrolling ? "text-black" : "text-white"}`} />
          <IoSearch className={`text-xl md:block cursor-pointer hover:text-indigo-500 ${scrolling ? "text-black" : "text-white"}`} />
          <Link to="/hire">
            <button className="px-4 py-2 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition hidden md:block">Hire Talent</button>
          </Link>
          <button
            className={`md:hidden text-2xl ${scrolling ? "text-black" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full bg-white text-black shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-6 p-6">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-indigo-600">DEALDRIVE</h1>
                <IoMdClose className="text-3xl cursor-pointer text-gray-600 hover:text-red-500" onClick={() => setMenuOpen(false)} />
              </div>
              <hr />
              {navdata.map((data, index) => (
                <button
                  key={index}
                 
                  className="text-lg font-medium hover:text-indigo-500 mb-4"
                >
                  {data.title}
                  <hr />
                </button>
              ))}
              <button className="px-4 py-3 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600">Hire Talent</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && activeModal && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3 }}
            className="inset-0 bg-black bg-opacity-50 flex items-center justify-center relative"
          >
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-[70%] text-center absolute top-0">
            

              {/* Dynamic Content Rendering */}
              {activeModal.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;





