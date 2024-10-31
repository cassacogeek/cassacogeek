import React from 'react';
import Header from './header';
import Footer from './footer';
import Carousel from './carrossel';
import { slidesCategorias, slidesLancamentos, slidesMaisVendidos, slidesOfertas } from '../data';

const Home = () => {

    return (
        <div>
          <div className='pt-24' id='Lacamentos'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Laçamentos</h1>
            </div>
          </div>
          <Carousel slidesData={slidesLancamentos} />
        </div>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Ofertas</h1>
            </div>
          </div>
          <Carousel slidesData={slidesOfertas} />
        </div>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Categorias</h1>
            </div>
          </div>
          <Carousel slidesData={slidesCategorias} />
        </div>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Mais vendidos</h1>
            </div>
          </div>
          <Carousel slidesData={slidesMaisVendidos} />
        </div>
        <Header />
        <div className='mt-60'>
          <Footer />
        </div>
        </div>
    )
};

export default Home;