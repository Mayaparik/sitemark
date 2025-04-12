import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
