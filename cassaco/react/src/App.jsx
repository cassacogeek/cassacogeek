import React, { useState, useEffect } from 'react'
import Carousel from './carrossel'
import menu from './assets/menu.png'
import login from './assets/login.png'
import sacola from './assets/sacola-de-compras.png'
import busca from './assets/lupa.png'
import close from './assets/x.png'
import claro from './assets/sol.png'
import escuro from './assets/lua.png'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menu_suspenso = () => {
    setIsOpen(!isOpen);
  };
  
  // Altera o tema ao mudar o estado de darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Função para alternar entre claro e escuro
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPIoO2w5ak8d6sK-GosQVR1AeRr0aZCLsnQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfqefJhPx0zT4tuC_A3xVD45nrbzzUP9C1g&s",
    "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg"
  ];

  return (
    <>
      <nav className="bg-[#bdac7f] p-5" id="cabecalho">
            <div className="flex">
                <div className="flex">
                    <button onClick={menu_suspenso} type="button">
                        <img src={menu} alt="menu"/>
                    </button>
                    
                </div>
					<a href="#"><img src="" alt="logo"/></a>
              <div className="flex grow justify-center">
                <form>
                  <input className="w-[400px] h-10 bg-white rounded-full" type="text" placeholder="  Buscar"/>
                  <button className='relative end-11 top-2'>
                    <img className='w-7' src={busca} alt="lupa"/></button>
                </form>
              </div>
              <div className="flex grow-0">
                <a className='me-2 mt-2' href="#">
                  <img src={sacola} alt="sacola"/>
                </a>
                <a className='me-2 mt-2' href="#">
                  <img src={login} alt="login"/>
                    </a>
                    <button onClick={toggleTheme} className="h-[32px] mt-1 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full">
                      <img src={darkMode ? escuro : claro} alt={darkMode ? 'claro' : 'escuro'} />
                    </button>
                </div>
            </div>
        </nav>
        <div>
          {isOpen && (
            <div>
              <div className='fixed top-0 w-1/4 h-full bg-white dark:bg-slate-800 text-black dark:text-white pl-3' >
                <button className='sticky start-full me-3 mt-2' onClick={menu_suspenso} type='button'>
                  <img src={close} alt="Fechar" />
                  </button>
                <h1 className='text-xl'>Cassaco Loja</h1>
                <ul className='border-s-2 border-[#bdac7f] pl-2'>
                  <li className='hover:ms-1'><a href="#">Início</a></li>
                  <li className='hover:ms-1'><a href="#">Laçamentos</a></li>
                  <li className='hover:ms-1'><a href="#">Produtos</a></li>
                </ul>
              </div>
              <div className='fixed top-0 start-1/4 w-full h-full bg-[#00000017]' onClick={menu_suspenso}></div>
              
            </div>
          )}
        </div>
        <div>
          <Carousel images={images} />
        </div>
    </>
  )
}

export default App
