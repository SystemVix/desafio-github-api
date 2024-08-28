import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Find from './routes/Find/index.tsx'
import NotFound from './routes/NotFound/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='find' element={<Find/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
