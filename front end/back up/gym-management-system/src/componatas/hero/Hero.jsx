import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero-background relative '>
      <div className='absolute top-0 left-0 text-white p-4'>
        <h1 className='text-8xl font-bold mt-20'>Finess Center</h1>
        <Link to="/login">
          <button className='bg-gray-400 bg-opacity-80 hover-bg-blue-700
           text-white font-bold py-3 px-10 
           rounded-lg mt-20 ml-20 text-3xl' >
             Login 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
