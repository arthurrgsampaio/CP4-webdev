import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contato from './pages/Contato/Contato';



const router = createBrowserRouter([
  { path: "/", element: <Home/> }, 
  { path: "/contato", element: <Contato/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
