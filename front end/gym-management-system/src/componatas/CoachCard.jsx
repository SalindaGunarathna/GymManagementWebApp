import React from 'react';
import axios  from 'axios';
import { useEffect, useState } from 'react';


import coach_1 from './images/coach_1.png'; 
import coach_2 from './images/coach_2.png'; 
import coach_3 from './images/coach_3.png'; 


const CoachCard = () => {
    
    const [coachFirstName, setCoachFirstName] = useState();
    const [coachLasttName, setCoachLasttName] = useState();
    const [coachDiscription, setCoachDiscription] = useState();
    

    const url = "http://localhost:4000/test";

    useEffect(()=>{
   
     const fetchData = async()=>{
 
       try{
         const  coach = await axios.get(url);
 
         
 
 
       
 
         setCoachFirstName(coach.firstName);
         setCoachLasttName(coach.lastName);
         setsetCoachDiscription(coach.discription);
      
       }catch(error){
         console.log(error);
 
       }
 
       
     };
 
     fetchData();
 
   },[]);
   

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {coach.map((coach) => (
        <div key={coach.id} className="flex flex-col bg-white rounded-lg shadow-lg p-4">
          <img
            src={coach.image}
            alt={coach.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{coach.name}</h2>
            <p className="text-gray-600">{coach.description}</p>
            <p className="text-gray-600">Tel No: {coach.tel}</p>
          </div>
          <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Coach
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoachCard;
