import React, { useState } from 'react';
import Anterior from './assets/anterior.png'
import Proximo from './assets/proximo.png'


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-between w-full">
      <img className='absolute w-full z-0' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className='sticky start-0 z-999' onClick={prevSlide}><img src={Anterior} alt="Anterior" /></button>
      <button className='sticky start-full' onClick={nextSlide}><img src={Proximo} alt="Proximo" /></button>
    </div>
  );
};

export default Carousel;
