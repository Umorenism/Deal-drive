import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";

const SliderCard = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "BUILDING HUMAN CAPITAL THROUGH GOOD HEALT",
      description: "Empowering individuals through proper diets ",
      video: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video
    },
    {
      url: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "INNOVATIVE TECHNOLOGY SOLUTIONS",
      description: "Bringing the latest fruites test to enhance health growth.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      url: "https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "REACHING OUT ACROSS UYO",
      description: "Building bridges for customers satisfaction.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[1000px] mx-auto px-4 py-16">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover rounded-2xl duration-300 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center text-white text-start p-6 rounded-2xl">
          <div className="flex justify-between mt-20 items-center gap-16 md:max-w-[1200px]">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-2xl font-bold">{slides[currentIndex].title}</h2>
              <p className="mt-2 text-sm md:text-lg max-w-[600px]">{slides[currentIndex].description}</p>
            </div>
            {/* Play Button */}
            <FaPlayCircle
              size={100}
              className="cursor-pointer hover:scale-110 transition-all"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 transform -translate-y-1/2 p-2 rounded-full bg-black text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 transform -translate-y-1/2 p-2 rounded-full bg-black text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {slides.map((_, slideIndex) => (
          <RxDotFilled
            key={slideIndex}
            className={`text-xl cursor-pointer transition-all ${
              slideIndex === currentIndex ? "text-blue-500 scale-125" : "text-gray-400"
            }`}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-[70%] relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <video controls className="w-full rounded-lg">
              <source src={slides[currentIndex].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderCard;
