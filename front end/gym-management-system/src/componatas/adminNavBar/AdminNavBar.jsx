import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          Admin
        </div>
        <div className="text-sm flex items-center m">
          <Link to="/admin/packages" className="mr-5 hover:underline">All Packages</Link>
          <Link to="/admin/coaches" className="mr-5 hover:underline">Coaches</Link>
          <Link to="/admin/members" className="mr-5 hover:underline">Members</Link>
        </div>
        <div className="text-sm mr-10">
          <Link to="/admin/profile" className="mr-4 hover:underline">Profile</Link>
          <Link to="/admin/logout" className="ml- hover:underline">Log Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
