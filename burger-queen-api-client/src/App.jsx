//import { useState } from 'react'
import {Redirect} from "react-router-dom";
import  Login  from './components/Login'
import  Profiles  from './components/Profiles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  // const barearToken = localStorage.getItem("Mytoken");
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
