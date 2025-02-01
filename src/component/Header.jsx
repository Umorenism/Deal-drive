import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navdata = [
    { title: "Why Deal Drive", content: "Content for Why Deal Drive" },
    { title: "Adaptive Hiring", content: "Content for Adaptive Hiring" },
    { title: "Solution", content: "Content for Solution" },
    { title: "Platform", content: "Content for Platform" },
    { title: "Resources", content: "Content for Resources" },
    { title: "Talent", content: "Content for Talent" },
    { title: "About", content: "Content for About" },
  ];

  const openModal = (title) => {
    setActiveModal(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveModal(null), 300); 
  };

  return (
    <header
      className={`w-full fixed top-0 z-10 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md text-blue-500" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-3xl  gap-3 text-indigo-600 flex items-center">
           <Link to="/"> DEALDRIVE </Link><p className=" hidden md:flex bg-slate-400 text-sm h-10 w-[0.1rem]"></p>
          </h1>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex space-x-6 ${scrolling ? "text-black" : "text-white"}`}>
            {navdata.map((data, index) => (
              <button
                key={index}
                onClick={() => openModal(data.content)}
                className={`text-black text-xl font-medium hover:text-indigo-400 transition-colors ${
                  scrolling ? "text-slate-600" : "text-white"
                }`}
              >
                {data.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side Icons and Button */}
        <div className="flex items-center gap-4">
          <FaRegUserCircle
            className={`text-black text-xl hidden md:block cursor-pointer hover:text-indigo-500 transition-colors ${
              scrolling ? "text-black" : "text-white"
            }`}
          />
          <IoSearch
            className={`text-black text-xl hidden md:block cursor-pointer hover:text-indigo-500 transition-colors ${
              scrolling ? "text-black" : "text-white"
            }`}
          />
         <Link to="/hire">
         <button className="px-4 py-2 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition hidden md:block">
            Hire Talent
          </button>
         </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-black text-2xl ${scrolling ? "text-black" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                <IoMdClose
                  className="text-3xl cursor-pointer text-gray-600 hover:text-red-500 transition"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
              <hr />

              {/* Navigation Links */}
              {navdata.map((data, index) => (
                <button
                  key={index}
                  onClick={() => openModal(data.content)}
                  className="text-black text-lg font-medium hover:text-indigo-500 transition-colors mb-4"
                >
                  {data.title}
                  <hr />
                </button>
              ))}
              <button className="px-4 py-3 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition">
                Hire Talent
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Modal Component */}
      {/* Modal Section */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3 }}
            className=" inset-0 bg-black bg-opacity-50 flex items-center justify-center relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-[80%]  text-center absolute top-10">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-xl text-gray-500 hover:text-red-500 transition"
              >
                <IoMdClose />
              </button>

              {/* Different UI for each modal */}
              {activeModal === "Solution" && (
                <div>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Our Solution</h2>
                  <p className="text-gray-700 mb-4">
                    We provide AI-driven solutions tailored for your business.
                  </p>
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
                    Learn More
                  </button>
                </div>
              )}

              {activeModal === "Platform" && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Platform</h2>
                  <img src="/platform-image.png" alt="Platform" className="mb-4 rounded-lg shadow-md" />
                  <p className="text-gray-700">A seamless and scalable hiring experience.</p>
                </div>
              )}

              {activeModal === "Resources" && (
                <div>
                  <h2 className="text-2xl font-bold text-green-600 mb-4">Resources</h2>
                  <ul className="list-disc list-inside text-left text-gray-700">
                    <li>Case Studies</li>
                    <li>Whitepapers</li>
                    <li>Webinars</li>
                  </ul>
                </div>
              )}

              {activeModal === "Talent" && (
                <div>
                  <h2 className="text-2xl font-bold text-orange-600 mb-4">Hire Top Talent</h2>
                  <p className="text-gray-700 mb-4">
                    Find the best professionals for your business needs.
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                    Start Hiring
                  </button>
                </div>
              )}

              {activeModal === "About" && (
                <div>
                  <h2 className="text-2xl font-bold text-red-600 mb-4">About Us</h2>
                  <p className="text-gray-700">We are dedicated to revolutionizing talent acquisition.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
