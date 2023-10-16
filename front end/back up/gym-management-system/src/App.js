import React from "react";
import { Route, Routes } from 'react-router-dom';


import Navbar from "./componatas/Navbar"
import AboutUs from "./pages/AboutUs";
import Member from "./pages/Member";
import HomePage from "./pages/Home"
import AdminPage from "./pages/AdminPage";
import Footer  from "./componatas/Footer";


const App = () => {
  return (
    <div>
      <Navbar />




      <Routes>
        <Route path="/admin" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/member" element={<Member />} />
        <Route path="/" element={<AdminPage />} />
        


      </Routes>

      <Footer/>

      
    </div>
  );
};

export default App;
