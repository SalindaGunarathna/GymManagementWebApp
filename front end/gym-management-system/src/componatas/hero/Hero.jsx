import React from 'react';
import { Link } from 'react-router-dom'
import './hero.css';

import image from "../images/home.png";
const Hero = () => {
  return (
    <div className='hero-background bg-cover bg-center bg-opacity-5  h-screen ' >
      
<section class="bg-center bg-no-repeat  bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">

        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to Fitness Center - Your Path to Fitness and Well-Being</h1>

        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">we're dedicated to areas where fitness, innovation, and commitment create lasting well-being and encourage personal growth.</p>

        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

            <a href="/login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            
        </div>
    </div>
</section>

    </div>
  );
};

export default Hero;
