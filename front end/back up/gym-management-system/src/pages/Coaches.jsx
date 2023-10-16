import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Coaches = () => {
    const [coach, setCoach] = useState([]);
    const url = "http://localhost:4000/coach";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
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
            const response = await axios.delete(`http://localhost:4000/package/${coachID}`);
            if (response.status === 200) {
                // Package deleted successfully, update your UI or show a message
                alert('Package deleted successfully');

                // Update the local state to remove the deleted package
                setCoach((preCoach) => preCoach.filter((pkg) => pkg.coachID !== coachID));
            }
        } catch (error) {
            console.log(error);
            alert('Failed to delete Coach');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-400">
            <h1 className="text-2xl font-semibold my-4">Coaches</h1>
            <div className="flex flex-wrap justify-start min-w-screen flex-grow mt-5 p-3">
                {coach.map((pkg) => (
                    <div
                        key={pkg.coachID}
                        className="bg-white rounded-lg shadow-lg p-4 mb-4"
                        style={{
                            backgroundColor: '#423F3F',
                            borderRadius: '8px',
                            width: 'calc(25% - 20px)',
                            margin: '0 10px 20px 0', // Adjust margin here for vertical space
                        }}
                    >
                        <img
                            src={pkg.profile}
                            alt={pkg.firstName}
                            className="w-full h-70 object-cover rounded-t-lg"
                        />

                        <h2 className="text-xl font-semibold">Name: {pkg.firstName}  {pkg.lastName}</h2>
                        <p className="text-white ">Mobile No : {pkg.mobileNO}</p>
                        <p className="text-white">Email: {pkg.email} per month</p>


                        {expandedCoachDetails.includes(pkg.coachID) && (
                            <div className='text-white'>

                                <p>Qualification: {pkg.qualification.join(', ')}</p>
                                <p className="text-white">Discription: {pkg.discription}</p>
                                
                            </div>
                        )}

                        <button
                            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => handleSeeMore(pkg.coachID)}
                        >
                            {expandedCoachDetails.includes(pkg.coachID) ? 'See Less' : 'See More'}
                        </button>

                        <button
                            className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => handleDelete(pkg.coachID)}
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
              
                <Link to="/addnewpackage">
                    <button className="bg-slate-800 hover-bg-green-700
                        text-white font-bold py-2 px-4 rounded mt-10 w-full">
                        Add New Package
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Coaches;
