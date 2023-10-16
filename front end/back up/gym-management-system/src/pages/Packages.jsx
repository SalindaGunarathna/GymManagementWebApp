import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const url = "http://localhost:4000/package";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const fetchedPackages = response.data;
                setPackages(fetchedPackages);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [expandedPackages, setExpandedPackages] = useState([]);

    const handleSeeMore = (packageNo) => {
        if (expandedPackages.includes(packageNo)) {
            setExpandedPackages(expandedPackages.filter((pNo) => pNo !== packageNo));
        } else {
            setExpandedPackages([...expandedPackages, packageNo]);
        }
    };

    const handleDelete = async (packageNo) => {
        try {
            const response = await axios.delete(`http://localhost:4000/package/${packageNo}`);
            if (response.status === 200) {
                // Package deleted successfully, update your UI or show a message
                alert('Package deleted successfully');

                // Update the local state to remove the deleted package
                setPackages((prevPackages) => prevPackages.filter((pkg) => pkg.packageNo !== packageNo));
            }
        } catch (error) {
            console.log(error);
            alert('Failed to delete package');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-400">
            <h1 className="text-2xl font-semibold my-4">Packages</h1>
            <div className="flex flex-wrap justify-start min-w-screen flex-grow mt-5 p-3">
                {packages.map((pkg) => (
                    <div
                        key={pkg.packageNo}
                        className="bg-white rounded-lg shadow-lg p-4 mb-4"
                        style={{
                            backgroundColor: '#423F3F',
                            borderRadius: '8px',
                            width: 'calc(25% - 20px)',
                            margin: '0 10px 20px 0', // Adjust margin here for vertical space
                        }}
                    >
                        <img
                            src={pkg.image}
                            alt={pkg.packageName}
                            className="w-full h-70 object-cover rounded-t-lg"
                        />

                        <h2 className="text-xl font-semibold">Name: {pkg.packageName}</h2>
                        <p className="text-white ">Package NO: {pkg.packageNo}</p>
                        <p className="text-white">Price: {pkg.price} per month</p>


                        {expandedPackages.includes(pkg.packageNo) && (
                            <div className='text-white'>
                                <p className="text-white">Age Range: {pkg.ageRange}</p>
                                <p className="text-white">Minimum Weight: {pkg.miniWeight}</p>
                                <p>Exercise Numbers: {pkg.exerciseNo.join(', ')}</p>
                            </div>
                        )}

                        <button
                            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => handleSeeMore(pkg.packageNo)}
                        >
                            {expandedPackages.includes(pkg.packageNo) ? 'See Less' : 'See More'}
                        </button>

                        <button
                            className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => handleDelete(pkg.packageNo)}
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
                    margin: '10px 10px 20px 10px', // Adjust margin here for vertical space
                }}
            >
                {/* You can add the link to your "Add New Package" page here */}
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

export default Packages;
