import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  return (
    <nav className="bg-slate-300 bg-opacity-70 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/admin" className='ml-5'>
             
           Back

          </Link>

        </div>
        <div className="text-sm flex items-center m">
          {/*           
          <Link to="/admin" className="mr-5 hover:underline">All Packages</Link>
          <Link to="/Coaches" className="mr-5 hover:underline">Coaches</Link>
          <Link to="/members" className="mr-5 hover:underline">Members</Link>
         
          <Link to="/addExercise" className="mr-5 hover:underline">Add Exercise</Link>
          <Link to="/addNewAdmin" className="mr-5 hover:underline">Add New Admin</Link>
           */}
        </div>
        <div className="text-sm mr-10">
          <Link to="/admin" className="mr-4 hover:underline">Profile</Link>
          <Link to="/" className="ml- hover:underline">Log Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
