import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import menuClaro from '../assets/menu-claro.png'
import menuEcuro from '../assets/menu-escuro.png';
// import logoClaro from '../assets/logo-claro.png'
import logoEscuro from '../assets/logo-escuro.png'
import loginClaro from '../assets/login-claro.png';
import loginEscuro from '../assets/login-escuro.png';
import sacolaClaro from '../assets/sacola-claro.png';
import sacolaEscuro from '../assets/sacola-escuro.png';
import buscaEscuro from '../assets/lupaescuro.png';
import buscaClaro from '../assets/lupaclaro.png';
import closeLigth from '../assets/xclaro.png';
import closeDark from '../assets/xescuro.png';
import claro from '../assets/sol.png';
import escuro from '../assets/lua.png';
import { useTheme } from '../functions/themeContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleTheme } = useTheme();

  const menu_suspenso = () => {
    setIsOpen(!isOpen);
  };
  
      return (
        <div>
            <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 p-5 shadow-lg border border-transparent border-b-gray-200" id="cabecalho">
            <div className="flex">
                <div className="flex">
                    <button onClick={menu_suspenso} type="button">
                        <img src={darkMode ? menuClaro : menuEcuro} alt="menu"/>
                    </button>
                </div>
					  <div className='ms-2'><Link to={'/'}><img className='absolute top-2 w-[64px]' src={darkMode ? "logo" : logoEscuro} alt="logo"/></Link></div>
              <div className="flex grow justify-center">
                <form>
                  <input className="w-[400px] h-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full ring-2 ring-gray-400" type="text" placeholder="  Buscar"/>
                  <button className='relative end-11 top-2'>
                    <img className='w-7' src={darkMode ? buscaClaro : buscaEscuro} alt="lupa"/>
                  </button>
                </form>
              </div>
              <div className="flex grow-0">
                <Link className='me-2 mt-2' to={'/sacola'}>
                  <img src={darkMode ? sacolaClaro : sacolaEscuro} alt="sacola"/>
                </Link>
                <Link className='me-2 mt-2' to={'/login'}>
                  <img src={darkMode ? loginClaro : loginEscuro} alt="login"/>
                </Link>
                    <button onClick={toggleTheme} className="h-[32px] mt-1 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full">
                      <img src={darkMode ? escuro : claro} alt={darkMode ? 'claro' : 'escuro'} />
                    </button>
                </div>
            </div>
        </nav>
        <div className=''>
          {isOpen && (
            <div>
              <div className='fixed top-0 w-1/2 sm:w-1/3 xl:w-1/4 h-full bg-white dark:bg-slate-800 text-black dark:text-white pl-3' >
                <button className='sticky start-full me-3 mt-2' onClick={menu_suspenso} type='button'>
                  <img src={darkMode ? closeLigth : closeDark} alt="Fechar" />
                  </button>
                <h1 className='text-xl'>Cassaco Loja</h1>
                <ul className='border-s-2 border-[#bdac7f] pl-2'>
                    <li onClick={menu_suspenso} className='cursor-pointer hover:ms-1'><Link to={'/'}>Início</Link></li>
                    <li className='cursor-pointer hover:ms-1'><a href="#Lancamentos">Laçamentos</a></li>
                    <li onClick={menu_suspenso} className='cursor-pointer hover:ms-1'><Link to={'/produtos'}>Produtos</Link></li>                  
                </ul>
              </div>
              <div className='fixed top-0 start-1/2 sm:start-1/3 xl:start-1/4 w-full h-full bg-[#00000017]' onClick={menu_suspenso}></div>
            </div>
          )}
        </div>
        </div>
    );

};

export default Header;