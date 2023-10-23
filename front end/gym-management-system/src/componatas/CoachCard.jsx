import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoachCard = () => {
  const [coaches, setCoaches] = useState([]);

  const url = "http://localhost:4000/homecoach";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const fetchedCoaches = response.data;
        setCoaches(fetchedCoaches);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className=' justify-between ml-20 p-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-20  gap-8 justify-center">
        {coaches.map((coach) => (
          <div key={coach.coachID} className="flex flex-col bg-white rounded-lg shadow-lg p-2">
            <img
              src={coach.profile}
              alt={coach.firstName}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold mb-2">{coach.firstName}</h2>
              <p className="text-gray-600 text-sm">{coach.discription}</p>
            </div>
            <h2 className="mt-auto bg-blue-500 hover-bg-blue-700 text-white font-bold  rounded">
              Coach {coach.firstName}
            </h2>
          </div>
        ))}
      </div>
    </div>

  );
};

export default CoachCard;
