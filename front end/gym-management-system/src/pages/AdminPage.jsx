import React from 'react'

import { Route, Routes } from 'react-router-dom';


import AdminNavBar from '../componatas/adminNavBar/AdminNavBar'
import Packages from './Packages'
import Coaches from './Coaches';
import Members from './Members';
import EditMember  from './EditMember';
import AddPackage from './AddPackage';
import AddCoach from './AddCoach';
import AddExercise from './AddExercise';
import AddNewAdmin from './AddNewAdmin';

const AdminPage = () => {
  return (
    <div>

      <AdminNavBar />
      <Routes>
        <Route path="/" element={<Packages/>} />
        <Route path="/vvv" element={<Coaches/>} />
        <Route path="/fff" element={<Members/>} />
        <Route path="/hh" element={<EditMember/>} />
        <Route path="/d" element={<AddCoach/>} />
        <Route path="/admin/addnewpackage" element={<AddPackage/>} />
        <Route path="/d" element={<AddNewAdmin/>} />
        <Route path="/gg" element={<AddExercise/>} />


        






      </Routes>



    </div>
  )
}

export default AdminPage