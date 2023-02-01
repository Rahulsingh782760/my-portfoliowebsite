import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./routers/Home.js";
import About from "./routers/About.js";
import Contact from "./routers/Contact.js";
import Project from "./routers/Project.js";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>

    </div>
    
  );
}

export default App;
