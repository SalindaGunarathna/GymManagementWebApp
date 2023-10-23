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
import Coaches  from "./pages/Coaches";
import Packages from "./pages/Packages";
import Members from "./pages/Members";
import EditMember from "./pages/EditMember";
import AddPackage from "./pages/AddPackage";
import AddExercise   from "./pages/AddExercise";
import AddCoach from "./pages/AddCoach";
import ProfileMember from "./pages/ProfileMember";
import AddNewAdmin from "./pages/AddNewAdmin";

import MemberProfilePage from "./pages/MemberProfilePage";
const App = () => {
  return (
    <div>
      <Navbar />




      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        
        <Route path="/register" element={<AddMemeber />} />
        <Route path="/member" element={<MemberProfilePage />} />
        <Route path="/coach" element={<ProfileChoach />} />


        <Route path="/admin" element={<Packages />} />
        <Route path="/Coaches" element={<Coaches/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/editmember" element={<EditMember/>} />
        <Route path="/addPackage" element={<AddPackage/>} />
        <Route path="/addCoach" element={<AddCoach/>} />
        <Route path="/addExercise" element={<AddExercise/>} />
        <Route path="/addNewAdmin" element={<AddNewAdmin/>} />


        


      </Routes>

      <Footer/>

      
    </div>
  );
};

export default App;
