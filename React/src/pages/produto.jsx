import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Produtos } from '../data';

import Header from './header';
import Footer from './footer';

const Produto = () => {
    const { id } = useParams();
    const produto = Produtos.find((p) => p.id === Number(id));

    return (
        <div className='bg-white dark:bg-gray-800 mt-20 w-full h-screen'>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-3 w-3/4 p-5 mt-4 border dark:border-gray-600 rounded-xl shadow-xl'>
                        <img src={produto.imgSrc} alt={produto.name} />
                        <div className='col-span-2'>
                            <h1 className='font-bold text-2xl text-black dark:text-white mb-2'>{produto.name}</h1>
                            <div className='text-black dark:text-white mb-2'>
                                <p>{produto.oferta}</p>
                                <p className='text-lg'>{produto.preco}</p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <div className='grid grid-cols-3 text-center text-black dark:text-white w-24 h-7 rounded-full bg-gray-300 dark:bg-gray-600'>
                                    <button className='rounded-full hover:bg-gray-400'>-</button>
                                    1
                                    <button className='rounded-full hover:bg-gray-400'>+</button>
                                </div>
                                <div><button className='rounded bg-[#bdac7f] px-3 py-2'>Comprar</button></div>
                                <div><button className='rounded bg-[#bdac7f] col-span-2 px-3 py-2'>Adicionar à sacola</button></div>
                            </div>
                        </div>
                        <p className='text-black dark:text-white'>Descricao do produto.</p>
                    </div>
                </div>
                <Header />
                <div className='mt-60'>
                <Footer />
                </div>
        </div>
    );
};
 
export default Produto;