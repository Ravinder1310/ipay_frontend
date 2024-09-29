import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    '/images/abcde.png', // Replace with actual image paths
    '/images/abcdef.png',
    '/images/abcdefg.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically change slide every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);

    // Clear interval when component unmounts to avoid memory leaks
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className='relative w-full sm:h-[390px] overflow-hidden z-0 mt-16'>
      {/* Slider Images */}
      <div
        className='flex transition-transform duration-1000 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className='w-full flex-shrink-0'>
            <img
              src={image}
              alt={`slide-${index}`}
              className='w-full h-[200px] sm:h-[390px] object-cover object-center'
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className='absolute left-3 top-1/2 transform -translate-y-1/2 bg-red-400 text-white p-2 rounded-full hover:opacity-100 transition-opacity'
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-400 text-white p-2 rounded-full hover:opacity-100 transition-opacity'
      >
        &#10095;
      </button>

      {/* Dots for Navigation */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
