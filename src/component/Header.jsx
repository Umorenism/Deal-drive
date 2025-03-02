

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
import Platform from "../headerModelComponent/Platform";
import Resources from "../headerModelComponent/Resources";
import Talent from "../headerModelComponent/Talent";
import About from "../headerModelComponent/About";
import axios from "axios";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [menu,setMenu]=useState(false)
  // const [searchOpen,setSearchOpen]=useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const modalRef = useRef(null); // Create a reference for the modal content



// Function to fetch data from API
const fetchResults = async (query) => {
  try {
    const response = await axios.get(
      `https://api.example.com/search?q=${query}`
    );
    setSearchResults(response.data.results); // Adjust based on API response structure
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

// Fetch data when user types (Debounce effect)
useEffect(() => {
  if (searchTerm.length > 2) {
    const delayDebounce = setTimeout(() => {
      fetchResults(searchTerm);
    }, 500); // Wait 500ms before making request

    return () => clearTimeout(delayDebounce);
  }
}, [searchTerm]);
   
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
        <div >
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
          <Platform/>
        </div>
      ),
    },
    {
      title: "Resources",
      content: (
        <div>
          <Resources/>
        </div>
      ),
    },
    {
      title: "Talent",
      content: (
        <div>
         <Talent/>
        </div>
      ),
    },
    {
      title: "About",
      content: (
        <div>
         <About/>
        </div>
      ),
    },
  ];

  const openModal = (data) => {
    setActiveModal(data);
    setModalOpen(true);
  };

  const handleMenu =()=>{
      setMenu(!menu)
    }
  const handleSearch =()=>{
      setSearchOpen(!searchOpen)
    }
  
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveModal(null), 300);
  };
  const handleMenuClose=()=>{
    setMenu(false)
  }
const HireClose=()=>{
  setMenuOpen(false)
  window.scrollTo(0, 0);
}
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

        <div className="flex items-center gap-4 relative">
          <FaRegUserCircle className={`text-xl hidden md:block cursor-pointer hover:text-indigo-500 ${scrolling ? "text-black" : "text-white"}`}  onClick={handleMenu}/>

          {menu &&(
            <motion.div  initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }} className="bg-white absolute top-10 z-10 w-44 right-20 rounded-md p-4">
              <div>
                <h1 className="mb-4 text-xl font-bold">User</h1>
                <hr />
               <div className="flex flex-col items-start space-y-3">
                <Link>
                <button>Login</button>
                </Link>
                <Link>
                <button className="mb-4">Sign up</button>
                </Link>
               </div>
              </div>
              <div>
                <hr />
                <h1 className="mb-4 mt-5 text-xl font-bold">Hiring Talent</h1>
               
               <div className="flex flex-col items-start space-y-3">
                <Link>
                <button>Login</button>
                </Link>
                <Link to="/signup">
                <button onClick={handleMenuClose}>Sign up</button>
                </Link>
               </div>
              </div>
             
            </motion.div>
          )}
          <IoSearch 
  className={`text-xl md:block cursor-pointer hover:text-indigo-500 ${scrolling ? "text-black" : "text-white"}`} 
  onClick={handleSearch} 
/>

{searchOpen && (
  <motion.div 
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }} 
    className="absolute top-12 right-0 z-10 w-[250px] md:w-[320px] bg-white shadow-lg rounded-lg p-3 flex items-center border border-gray-300"
  >
    {/* Search Icon */}
    <IoSearch className="text-gray-500 text-xl" />

    {/* Search Input */}
    <input 
      type="text" 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..." 
      className="w-full px-2 py-1 outline-none bg-transparent text-black placeholder-gray-400 focus:ring-2 focus:ring-blue-400 rounded-md"
    />

    {/* Close Icon */}
    <IoMdClose 
      className="text-gray-500 text-lg cursor-pointer hover:text-red-500 transition duration-200" 
      onClick={handleSearch} 
    />

    {/* Search Results */}
    {searchResults.length > 0 && (
      <ul className="absolute top-[105%] left-0 w-full bg-white shadow-md rounded-md mt-2 border border-gray-200 max-h-60 overflow-y-auto">
        {searchResults.map((item, index) => (
          <li 
            key={index} 
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200"
          >
            {item.name} {/* Adjust based on API data */}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
)}


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
                <Link onClick={HireClose} to="/">
                <h1 className="text-xl font-bold text-indigo-600">DEALDRIVE</h1>
                </Link>
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
              <Link onClick={HireClose} to="/hire" className="w-full">
              <button className="px-4 py-3 w-full bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600">Hire Talent</button>
              </Link>
              
             
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





