import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const SliderCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const slides = [
    {
      url: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'BUILDING HUMAN CAPITAL THROUGH GOOD HEALTH',
      description: 'Empowering individuals through proper diets.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      url: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'INNOVATIVE TECHNOLOGY SOLUTIONS',
      description: 'Bringing the latest fruits test to enhance health growth.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      url: 'https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'REACHING OUT ACROSS UYO',
      description: 'Building bridges for customers satisfaction.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  ];

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='relative w-full'>
      {/* Slider Container */}
      <div className='relative group'>
        <img
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
          className='w-full h-[600px] object-cover duration-300'
        />
        {/* Always Visible Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6 text-center'>
          <h2 className='text-xl md:text-2xl font-bold'>{slides[currentIndex].title}</h2>
          <p className='mt-2 text-sm max-w-[600px]'>{slides[currentIndex].description}</p>
          <FaPlayCircle
            size={50}
            className='cursor-pointer hover:scale-110 transition-all mt-4'
            onClick={openModal}
          />
          <div className='w-full  absolute bottom-0 flex justify-center items-center'>
            <div className='bg-[#434243] p-4 rounded-t-lg py-6 md:max-w-[1500px] w-full flex justify-center items-center'>
              <div className='flex md:max-w-[1000px] justify-between items-center w-full'>
                <img src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626a4aab5ef0f1a627c9088_The_Weather_Company_IBM_Byline%202.svg" alt="" className='w-5 md:w-20'/>
                <img src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626a4aab5ef0f1a627c90c9_github-2.svg" alt="" className='w-10 md:w-20'/>
                <img src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6659ee55b2d22a4dbb215e5f_isg%2070%20x%2060.webp" alt=""className='w-10 md:w-20' />
                <img src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6659eea57ed3ef2c8d4b2225_nubula%20homepage%20logo.webp" alt="" className='w-10 md:w-20'/>
                <img src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665b361fb0c42356c0ce7dff_Frame%201073715405.webp" alt="" className='w-10 md:w-20' />
                <div className='md:hidden flex gap-3'>
                  <FaArrowLeft onClick={prevSlide}/>
                  <FaArrowRight onClick={nextSlide}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Left Arrow */}
      <div
        className='absolute top-[50%] left-5 transform -translate-y-1/2 p-2 rounded-full bg-black text-white cursor-pointer'
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className='absolute top-[50%] right-5 transform -translate-y-1/2 p-2 rounded-full bg-black text-white cursor-pointer'
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg w-[90%] max-w-[400px] md:max-w-[600px] relative'>
            <button
              className='absolute top-2 right-2 text-black text-2xl'
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Video and Content */}
            <div className='flex flex-col items-center'>
              <h2 className='text-lg md:text-2xl font-bold mb-4'>{slides[currentIndex].title}</h2>
              <p className='text-sm mb-4'>{slides[currentIndex].description}</p>
              <video controls className='w-full rounded-lg'>
                <source src={slides[currentIndex].video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderCard;
