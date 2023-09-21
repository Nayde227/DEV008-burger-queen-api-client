
import  Login  from './components/Login'
import  Profiles  from './components/Profiles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Waiters from './components/Waiters'
import Cheff from './components/Cheff'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profiles" element={<Profiles />} />
    <Route path="/waiters" element={<Waiters />} />
    <Route path="/cheff" element={<Cheff />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
