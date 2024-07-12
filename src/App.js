import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import CornSilage from './Components/CornSilage';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
     
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cornsilage" element={<CornSilage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
  )
}

export default App