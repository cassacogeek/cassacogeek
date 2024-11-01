import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import Home from './pages/home';
import Produtos from './pages/produtos';
import Produto from './pages/produto';
import Sacola from './pages/sacola';
import Login from './pages/login';

// construindo as rotas
const data = [
	{ path: '/', element: <Home /> },
	{ path: '/produtos', element: <Produtos /> },
  { path: '/sacola', element: <Sacola /> },
  { path: '/login', element:<Login /> },
	{ path: '/:id', element: <Produto /> },
]

const router = createBrowserRouter(data)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
