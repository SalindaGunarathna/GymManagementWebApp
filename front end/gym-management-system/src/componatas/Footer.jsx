import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="mb-4 md:mb-0 md:w-1/3 ml-4">
        
          <p className="text-sm text-2xl">Welcome to "Your Fitness Center," where your health and wellness journey begins. We're dedicated to helping you achieve your fitness goals, whether you're just starting or aiming to take your fitness to the next level. With our experienced trainers and a supportive community, you'll find the inspiration and guidance you need to lead a healthier, happier life.</p>
        </div>
        <div className="mb-4 md:mt-7 md:w-1/3 ml-4">
          <h3 className="text-xl font-semibold mb-2 mr-4">Quick Access</h3>
          <ul className="text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login/member">Login (Member)</a></li>
            <li><a href="/login/coach">Login (Coach)</a></li>
            <li><a href="/login/admin">Login (Admin)</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 md:w-1/3 ml-4">
          <h3 className="text-xl font-semibold mb-11 mr-4">Contact Us</h3>
          <p className="text-sm">Phone: +1-123-456-7890</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Address: 123 Street Name, City, Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
