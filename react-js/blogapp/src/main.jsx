import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './components/pages/Home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'


let root=document.getElementById("root")

createRoot(root).render(
   //HTML Code
   <div>
       <Header/>
       <Home/>
       <Footer/>
   </div>
   
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
