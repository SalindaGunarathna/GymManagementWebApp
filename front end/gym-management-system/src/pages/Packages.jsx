import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminNavBar from '../componatas/adminNavBar/AdminNavBar';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const url = "http://localhost:4000/package";

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
      const response = await axios.delete(`http://localhost:4000/package/${packageNo}`,
      {
        headers: { authorization: "Bearer " + jwtToken},
      }
      );
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
    <div>
      <div className='flex bg-slate-900'>



        <div className='  bg-slate-900 bg-opacity-100 mr-10'>



          <div className='mt-10 mb-20 ml-5 mr-5 p-5 bg-slate-300 bg-opacity-25' style={{ borderRadius: '20px' }}>

            <div className='h-1/10'>

              <Link to="/admin">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-20px"  >
                  All packages  </button>
              </Link>

            </div>

            <div className='h-1/10'>
              <Link to ="/Coaches">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                  All  coaches </button>
              </Link>

            </div>
            <div className='h-1/10'>

              <Link to="/members">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                  All member</button>

              </Link>

            </div>

            <div className='h-1/10'>
              <Link to ="/addExercise">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                  Add exercise</button>
              </Link>

            </div>
            <div className='h-1/10 '>
              <Link to="/addNewAdmin">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                  Add    Admin</button>

              </Link>


            </div>
            <div className='h-1/10 mb-10 '>
              <Link to="/addPackage">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
               
                >

                  Add  Package</button>

              </Link>
              

            </div>

            <div className='h-1/10 mb-10'>
              <Link to="/">
                <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                
                >

                  Log Out </button>

              </Link>


            </div>
          
            <div className='h-1/10 mb-10 bg-white'>


            </div>




          </div>



        </div>


        <div class='w-3/5 bg-slate-300  m-10 p-10"text-white bg-gradient-to-r from-slate-500 to-black-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple to Pink p-20' style={{ borderRadius: '20px' }}
        >

          <h1 className='text-2xl'> All Packages</h1>

          <a href="#" class="mr-10  w-max-full flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-500 dark:hover:bg-gray-200"
            style={{ borderRadius: '20px' }}
>

            {packages.map((pkg) => (
              <div
                class="flex flex-col p-5 ml-10 mb-5  w-100 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:-800 dark:hover:bg-gray-400" style={{ borderRadius: '20px',boxShadow: '0 4px 6px rgba(0, 0, 1, 2)'}}

              >

                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pkg.image}
                  alt={pkg.packageName}
                />

                <div class="flex flex-col justify-between p-4 leading-normal">


                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Name: {pkg.packageName}
                  </h5>

                  <p class="mb-3 font-normal text-gray-900 dark:text-black">
                    Package NO: {pkg.packageNo}
                  </p>
                  <p>
                    Price: {pkg.price} per month
                  </p>
                  {expandedPackages.includes(pkg.packageNo) && (
                    <div>
                      <p>Age Range: {pkg.ageRange}</p>
                      <p>Minimum Weight: {pkg.miniWeight}</p>
                      <p>Exercise Numbers: {pkg.exerciseNo.join(', ')}</p>
                    </div>
                  )}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2"
                    onClick={() => handleSeeMore(pkg.packageNo)}
                  >
                    {expandedPackages.includes(pkg.packageNo) ? 'See Less' : 'See More'}
                  </button>

                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2"
                    onClick={() => handleDelete(pkg.packageNo)}
                  >
                    Delete
                  </button>



                </div>
              </div>
            ))}
          </a>



        </div>


      </div>

    </div>
  );

};

export default Packages;
