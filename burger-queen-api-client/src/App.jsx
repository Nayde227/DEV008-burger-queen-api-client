
import  Login  from './components/Login/Login'
import  Admin  from './components/Admin/Admin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Waiters from './components/Waiters/Waiters'
import Cheff from './components/Cheff/Cheff'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/waiters" element={<Waiters />} />
    <Route path="/cheff" element={<Cheff />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
