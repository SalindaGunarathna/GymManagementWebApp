import React from "react";
import { Route, Routes } from 'react-router-dom';


import Navbar from "./componatas/Navbar"
import AboutUs from "./pages/AboutUs";
import Member from "./pages/Member";
import HomePage from "./pages/Home"
import AdminPage from "./pages/AdminPage";
import Footer  from "./componatas/Footer";
import ProfileChoach from "./pages/ProfileChoach";
import AddMemeber from "./pages/AddMemeber";
import LoginPage from "./pages/LoginPage";

import ProfileMember from "./pages/ProfileMember";
const App = () => {
  return (
    <div>
      <Navbar />




      <Routes>
        <Route path="/admin" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/member" element={<Member />} />
        <Route path="/d" element={<AdminPage />} />
        <Route path="/d" element={<AddMemeber />} />
        <Route path="/ff" element={<ProfileChoach />} />
        <Route path="/d" element={<ProfileMember />} />
        <Route path="/" element={<LoginPage/>} />



      




        


      </Routes>

      <Footer/>

      
    </div>
  );
};

export default App;
