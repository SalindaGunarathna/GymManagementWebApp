import React from 'react';
import logo from './images/aboout_us.png';
const AboutUs = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center '>
      <h1 className='text-4xl md:text-5xl font-bold mb-5 mt-15'>About Us</h1>
      <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto p-1'>
        <div>
          <div className='md:w-3/3 p-4 mr-5'>
            <img
              src={logo}
              alt='About Us'
              className='w-full h-auto rounded-lg'
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)' }}
            />
          </div>
        </div>
        <div className='md:w-1/2 p-2'>
          <p className='text-lg text-gray-700 mb-2'>
            we understand that fitness is not just a goal; it's a lifestyle. Our team of dedicated trainers and staff are committed to helping you achieve your fitness aspirations. We offer a variety of workout options, from strength training to cardio, ensuring that you have everything you need for a well-rounded fitness routine.

            Our gym is more than just a place to work out; it's a community. We believe that the journey to better health should be enjoyable and empowering. Whether you're striving to build strength, lose weight, or boost your overall fitness, we're here to support you every step of the way.


          </p>
          <p>

            Our fitness approach is centered on you. We believe in making fitness a seamless part of your lifestyle, and our team is here to guide and inspire you on your journey to a healthier you. Whether you're a beginner or an experienced fitness enthusiast, we're here to help you succeed.

            Join our fitness community and take the first step towards a healthier, more active, and confident you.
          </p>
        </div>

      </div>
      <div className='h-10'>

      </div>



    </div>
  );
};

export default AboutUs;
