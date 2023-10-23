import React from 'react';
import ribbon from './images/ribbon.png';
import { Link } from "react-router-dom"

const Ribbon1 = () => {
  const ribbonStyle = {
    backgroundImage: `url(${ribbon})`,
  };

  return (
    <div
      className="h-64 bg-cover bg-center flex flex-col justify-center items-center"
      style={ribbonStyle}
    >
      <Link to="/register">
        <button className="bg-black bg-opacity-50 hover:bg-gray-700 text-white py-2 px-4 rounded">
          Join with Us
        </button>

      </Link>
    </div>
  );
};

export default Ribbon1;
