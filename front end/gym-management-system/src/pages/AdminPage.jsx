import React from 'react'

import { Route, Routes } from 'react-router-dom';


import AdminNavBar from '../componatas/adminNavBar/AdminNavBar'
import Packages from './Packages'
import Coaches from './Coaches';
import Members from './Members';
import EditMember  from './EditMember';

const AdminPage = () => {
  return (
    <div>

      <AdminNavBar />
      <Routes>
        <Route path="/admin/packages" element={<Packages/>} />
        <Route path="/ddd" element={<Coaches/>} />
        <Route path="/fff" element={<Members/>} />
        <Route path="/" element={<EditMember/>} />





      </Routes>



    </div>
  )
}

export default AdminPage