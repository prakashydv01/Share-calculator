import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className="overflow-x-hidden">
    <App />
  </div>
    </BrowserRouter>
  </StrictMode>,
)
