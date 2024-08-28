import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import FindUser from './routes/FindUser/index.tsx'
import NotFound from './routes/FindUser/NotFound/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Navigate to='home'/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='finduser' element={<FindUser/>}>
            <Route path='notfound' element={<NotFound/>}/>
          </Route>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
