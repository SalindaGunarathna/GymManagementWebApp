import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoachCard = () => {
  const [coaches, setCoaches] = useState([]);

  const url = "http://localhost:4000/homecoach";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const fetchedCoaches = response.data; // Assuming the coaches are in the 'data' property of the response
        setCoaches(fetchedCoaches);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {coaches.map((coach) => (
        <div key={coach.coachID} className="flex flex-col bg-white rounded-lg shadow-lg p-4">
          <img
            src={coach.profile}
            alt={coach.firstName}
            className="w-full h-70 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{coach.firstName}</h2>
            <p className="text-gray-600">{coach.discription}</p>
          </div>
          <h2 className="mt-auto bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Coach {coach.firstName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CoachCard;
