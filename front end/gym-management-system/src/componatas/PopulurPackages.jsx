import React from 'react';

import profile1 from './images/cla_1.png'; 
import profile2 from './images/cls_2.png'; 
import profile3 from './images/cls_3.png'; 


const PopularPackages = () => {
  return (
    <div className='bg-slate-200 flex flex-col items-center justify-center'>
      <h1 className='text-4xl md:text-5xl font-bold mb-1
      
      '>Popular Packages</h1>
      <div className="flex justify-between m-3 p-3">
        <div className="text-center p-6">
          <img src={profile1} alt="Package 1" className="w-80 h-80"
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 1, 2)',
          borderRadius: '15px'
         }}
          />
          <p className="mt-6 text-2xl"></p>
        </div>
        <div className="text-center p-6 mt-10 ml-10 mr-10">
          <img src={profile2} alt="Package 2" className="w-80 h-80"
           style={{ boxShadow: '0 4px 6px rgba(0, 0, 1, 2)',
           borderRadius: '15px'
          }}
          />
          <p className="mt-6 text-2xl"></p>
        </div>
        <div className="text-center p-6">
          <img src={profile3} alt="Package 3" className="w-80 h-80" 
           style={{ boxShadow: '0 4px 6px rgba(0, 0, 1, 2)',
           borderRadius: '15px'
          }}
          />
          <p className="mt-6 text-2xl"></p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">
          View More Packages
        </button>
      </div>
    </div>
  );
  
  
  
  
};

export default PopularPackages;
