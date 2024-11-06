import React, { useState, useEffect } from 'react'
import FacebookClaro from '../assets/facebook-claro.png'
import FacebookEscuro from '../assets/facebook-escuro.png'
import InstagramClaro from '../assets/instagram-claro.png'
import InstagramEscuro from '../assets/instagram-escuro.png'
import { useTheme } from '../functions/themeContext';

const Footer = () => {
    const { darkMode } = useTheme();

    return (
        <footer>
            <div className="bg-withe dark:bg-black border border-transparent border-t-gray-200 text-center text-gray-800 dark:text-gray-200">
                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-auto p-5">
                    <div className="pe-3 text-justify">
                        <h2 className="text-center">Sobre nós.</h2>
                        <p>A maior Loja Geek para utilidades caseiras da rede. Com uma grande variedade de produtos de decoração, utensílios de cozinha, produtos de cama, mesa e muito mais.</p>
                    </div>
                    <div className="border-2 border-transparent border-x-gray-200">
                        <h2>Contatos.</h2>
                        <p>Email: cassacoloja@gmail.com</p>
                        <p>Telefone: (85) 99219-6468</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2>Redes sociais.</h2>
                        <p className="flex justify-center"><a href="" target="_blank"><img src={darkMode ? FacebookClaro : FacebookEscuro} alt="Facebook" /></a></p>
                        <p className="flex justify-center"><a href="" target="_blank"><img src={darkMode ? InstagramClaro : InstagramEscuro} alt="Instagram" /></a></p>
                    </div>
                </div>
                <div className="border-2 border-transparent border-t-gray-200 p-2">
                    <p>&copy; 2024 Cassaco Geek. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
