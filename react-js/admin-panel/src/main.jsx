import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/pages/Login'
import MainLayout from './components/common/MainLayout'
import Dashboard from './components/pages/Dashboard'
import ViewUser from './components/pages/user/ViewUser'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/dashboard' element={<Dashboard/>}/>
                 <Route path='/user' element={<ViewUser/>}/>
                
            </Route>
            <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
