import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Home } from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
