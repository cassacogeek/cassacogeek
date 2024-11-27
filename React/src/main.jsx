import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '../src/functions/themeContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import Home from './pages/home';
import Produtos from './pages/produtos';
import Produto from './pages/produto';
import Sacola from './pages/sacola';
import Login from './pages/login';
import Entrar from './pages/entrar';
import Cadastrar from './pages/cadastrar';
import Recuperar from './pages/recuperar';
import Aviso from './pages/recuperar';



const data = [
	{ path: '/', element: <Home /> },
	{ path: '/produtos', element: <Produtos /> },
  	{ path: '/sacola', element: <Sacola /> },
  	{ path: '/login', element:<Login /> },
	{ path: '/:id', element: <Produto /> },
  	{ path: '/entrar', element: <Entrar />},
  	{ path: '/cadastrar', element: <Cadastrar />},
	{ path: '/recuperar', element: <Recuperar />},
	{ path: '/aviso', element: <Aviso />},
]

const router = createBrowserRouter(data)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>,
  </StrictMode>,
)
