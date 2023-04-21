import React from 'react'
import Main from './Components/Main'
//import Login from './Components/Login'
import'./App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './SignUp';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Header from './Components/Header';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route index element={<Header/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App