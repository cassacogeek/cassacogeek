import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slidesData }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Um slide por vez
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {[0, 4].map((startIndex) => (
          <div key={startIndex}>
            <div className="flex justify-center gap-2 md:gap-4 lg:gap-6">
              {slidesData.slice(startIndex, startIndex + 4).map((slide, index) => (
                <div
                  key={index}
                  className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-900 rounded-md shadow-lg mb-3 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
                >
                  <Link key={slide.id} to={`/${slide.id}`} onClick={() => { setIdProduto(slide.id) }}>
                    <div className="mb-4 flex justify-center">
                      {/* Correção do erro de digitação */}
                      <img src={slide.image} alt={slide.name} className="w-full h-auto object-contain" />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-gray-700 dark:text-gray-200 mb-2">{slide.name}</div>
                      <div className="text-right">
                        <div className="text-xs line-through text-gray-400 dark:text-gray-500">{slide.oferta}</div>
                        <div className="font-bold text-[#735731] dark:text-gray-200">{slide.price}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
