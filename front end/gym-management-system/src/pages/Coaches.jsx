import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminNavBar from '../componatas/adminNavBar/AdminNavBar';

const Coaches = () => {
    const [coach, setCoach] = useState([]);
    const url = "http://localhost:4000/coach";

    const jwtToken = localStorage.getItem('Token');
    console.log(jwtToken);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url,
                    {
                        headers: { authorization: "Bearer " + jwtToken},
                    }
                    );
                const fetchedCoach = response.data;
                setCoach(fetchedCoach);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [expandedCoachDetails, setExpandedCoachDeails] = useState([]);

    const handleSeeMore = (coachID) => {
        if (expandedCoachDetails.includes(coachID)) {
            setExpandedCoachDeails(expandedCoachDetails.filter((pNo) => pNo !== coachID));
        } else {
            setExpandedCoachDeails([...expandedCoachDetails, coachID]);
        }
    };

    const handleDelete = async (coachID) => {
        try {
            const response = await axios.delete(`http://localhost:4000/coach/${coachID}`,
            {
                headers: { authorization: "Bearer " + jwtToken},
            }
            );
            if (response.status === 200) {
                // Package deleted successfully, update your UI or show a message
                alert('Package deleted successfully');

                // Update the local state to remove the deleted package
                setCoach((preCoach) => preCoach.filter((coach) => coach.coachID !== coachID));
            }
        } catch (error) {
            console.log(error);
            alert('Failed to delete Coach');
        }
    };

    return (

        <div>
            <AdminNavBar />

            <div className="min-h-screen flex flex-col">
                <div
                class="text-black bg-gradient-to-r from-gray-900 to-slate-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-black-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{ borderRadius: '20px',boxShadow: '0 4px 6px rgba(0, 0, 1, 2)'}}
                
                >
                    <h1 className="text-2xl font-semibold my-4">Coaches</h1>
                    <div className="flex flex-wrap justify-start min-w-screen flex-grow mt-5 p-3">
                        {coach.map((coach) => (
                            <div
                                key={coach.coachID}
                                className="bg-black rounded-lg shadow-lg p-4 mb-4"
                                style={{
                                    backgroundColor: '#9CA3AF',
                                    borderRadius: '8px',
                                    width: 'calc(25% - 20px)',
                                    margin: '0 10px 20px 0', // Adjust margin here for vertical space
                                }}
                            >
                                <img
                                    src={coach.profile}
                                    alt={coach.firstName}
                                    className="w-full h-70 object-cover rounded-t-lg"
                                />

                                <h2 className="text-xl font-semibold">Name: {coach.firstName}  {coach.lastName}</h2>
                                <p className="text-black ">Mobile No : {coach.mobileNO}</p>
                                <p className="text-black">Email: {coach.email} per month</p>


                                {expandedCoachDetails.includes(coach.coachID) && (
                                    <div className='text-black'>

                                        <p>Qualification: {coach.qualification.join(', ')}</p>
                                        <p className="text-black">Discription: {coach.discription}</p>

                                    </div>
                                )}

                                <button
                                    className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                                    onClick={() => handleSeeMore(coach.coachID)}
                                >
                                    {expandedCoachDetails.includes(coach.coachID) ? 'See Less' : 'See More'}
                                </button>

                                <button
                                    className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                                    onClick={() => handleDelete(coach.coachID)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                    <div
                        className="bg-slate-700 rounded-lg shadow-lg p-4 mb-4 ml-5"
                        style={{
                            backgroundColor: '#423F3F',
                            borderRadius: '8px',
                            width: 'calc(25% - 20px)',
                            margin: '10px 10px 20px 10px',
                        }}
                    >

                        <Link to="/addCoach">
                            <button className="bg-slate-800 hover-bg-green-700
                        text-white font-bold py-2 px-4 rounded mt-10 w-full">
                                Add New Coach
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coaches;
