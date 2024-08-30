import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contato from './pages/Contato/Contato';



const router = createBrowserRouter([
  { path: "/", element: <Home/> }, 
  { path: "/contato", element: <Contato/>},
  { path: "/sobre", element: <About /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
