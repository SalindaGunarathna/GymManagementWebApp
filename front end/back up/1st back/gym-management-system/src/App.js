import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./componatas/Navbar"
import AboutUs from "./pages/AboutUs";

import HomePage from "./pages/Home"
const App = () => {
  return (
    <div>
      <Navbar/>
      
    
   
       <Routes>
       <Route path ="/" element = {<HomePage/>}/>
       <Route path ="/about" element = {<AboutUs/>}/>
          
      </Routes>
    </div>
  );
};

export default App;
