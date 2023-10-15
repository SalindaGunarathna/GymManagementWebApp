import React from 'react';
import logo from './images/aboutAs.png'; 
const AboutUs = () => {
  return (
    <div className='bg-gray-400 flex flex-col items-center justify-center'>
      <h1 className='text-4xl md:text-6xl font-bold mb-1'>About Us</h1>
      <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto p-1'>
        <div className='md:w-2/3 p-2 mr-4'>
          <img
            src={logo} 
            alt='About Us'
            className='w-full h-auto rounded-lg md:h-2/3' 
          />
        </div>
        <div className='md:w-1/2 p-4'>
          <p className='text-lg text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur orci at dolor
            bibendum, ac euismod felis tempus. Vivamus vel erat semper, aliquet quam vitae, fermentum
            nulla. Quisque quis eleifend dui.Certainly, Salinda. React is a popular JavaScript library used for building user interfaces for web applications. It was developed by Facebook and is widely used in the development of single-page applications and dynamic user interfaces. React is known for its simplicity, efficiency, and reusability, making it a valuable tool for web developers like yourself.

            React works by breaking down the user interface into reusable components. These components are like building blocks that can be easily assembled to create complex interfaces. Each component manages its own state and can be updated independently. This makes it easier to maintain and scale web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
