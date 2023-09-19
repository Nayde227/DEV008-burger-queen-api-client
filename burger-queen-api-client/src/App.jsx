
import  Login  from './components/Login'
import  Profiles  from './components/Profiles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profiles" element={<Profiles />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
