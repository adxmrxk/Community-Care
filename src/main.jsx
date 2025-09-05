import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import router from './Routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router = {router} />
  </StrictMode>,
)
