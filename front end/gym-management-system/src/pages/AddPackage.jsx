
import backGroundimage from '../componatas/images/Addpackage.png';

import React, { useState } from 'react';
import axios from 'axios';
import AdminNavBar from '../componatas/adminNavBar/AdminNavBar';

const AddPackage = () => {

    const jwtToken = localStorage.getItem('Token');
  console.log(jwtToken);

    const [image, setImage] = useState('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-no-pain-no-gain-ads-design-template-c0703313fc309474eea9ba831c4650ea_screen.jpg?ts=1681362728');


    const [packageNo, setPackageNo] = useState('');
    const [description, setDescription] = useState('');
    const [packageName, setPackageName] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [miniWeight, setMiniWeight] = useState('');
    const [miniHeight, setMiniHeight] = useState('');
    const [price, setPrice] = useState('');


    const [exerciseNo, setExerciseNo] = useState([]);

    const handleProfileChange = (e) => {
        const imageUrl = e.target.value;
        setImage(imageUrl);
    };


 
    

    const addExerciseNo = () => {
        setExerciseNo([...exerciseNo, '']);
    };

    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {
            packageNo,
            packageName,
            ageRange,
            miniWeight,
            miniHeight,
            price,
            exerciseNo,
            description,
            image,

        };


        const databaseEndpoint = 'http://localhost:4000/package';


        axios.post(databaseEndpoint, data,
            {
                headers: { authorization: "Bearer " + jwtToken},
            }
            )
            .then((response) => {
                console.log('Data submitted successfully:', response.data);
                alert('Data submitted successfully');

                window.location.reload();


            })
            .catch((error) => {
                console.error('Error submitting data:', error);
            });
    };

    return (
        <div>
            <AdminNavBar />
            <div>
                <div className='bg-cover bg-center bg-opacity-5  h-screen ' style={{ backgroundImage: `url(${backGroundimage})` }}>
                    <div className='flex'>
                        <div className='w-1/3  p-5'>
                            <div>
                                <img
                                    src={image}
                                    alt="Profile"
                                    className="w-90 h-80  mx-auto mb-5"
                                    style={{ borderRadius: '10%' }}
                                />
                                <p className='text-white text-2xl ml-12'> Add image Url </p>
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    className="w-80 bg-slate-500 ml-12"
                                    value={image}
                                    onChange={handleProfileChange}
                                />
                                <p className='text-white text-2xl mt-5 ml-12'> Your self </p>
                                <textarea
                                    placeholder="Write something about Package"
                                    className="w-80 h-40 bg-slate-500 ml-12 bg-opacity-10 text-white"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className=' text-white p-5 bg-slate-400 bg-opacity-25' style={{ borderRadius: '20px' }}>
                            <h1 className='text-5xl justify-center ml-15'> New Package</h1>
                            <h2 className='text-2xl mt-5'> Package No   </h2>
                            <input
                                type="text"
                                placeholder="Package Id"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                onChange={(e) => setPackageNo(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'> Package Name  </h2>
                            <input
                                type="text"
                                placeholder="Package Name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={packageName}
                                onChange={(e) => setPackageName(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'> Age Range </h2>
                            <input
                                type="text"
                                placeholder="Age Range"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={ageRange}
                                onChange={(e) => setAgeRange(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'>Minimum Weight </h2>
                            <input
                                type="text"
                                placeholder="Minimum Weight"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={miniWeight}
                                onChange={(e) => setMiniWeight(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'> Minimum Height</h2>
                            <input
                                type="text"
                                placeholder="Minimum Height"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={miniHeight}
                                onChange={(e) => setMiniHeight(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'> Price</h2>
                            <input
                                type="text"
                                placeholder="Price"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />



                        </div>
                    </div>
                </div>
                <div className='bg-black text-white '>

                    <h2 className='text-2xl  ml-10'> ExerciseNo... </h2>
                    {exerciseNo.map((exerciseNumber, index) => (
                        <input
                            type="text"
                            placeholder="Exercise Number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={exerciseNumber}
                            onChange={(e) => {
                                const updatedsetExercis = [...exerciseNo];
                                updatedsetExercis[index] = e.target.value;
                                setExerciseNo(updatedsetExercis);
                            }}
                            key={index}
                        />
                    ))}


                    <button className="bg-gray-700 text-white p-2 mt-2 ml-5 w-40 rounded-md" onClick={addExerciseNo}>
                        Add New Exercise Number
                    </button>



                </div>
                <div className='bg-black'>
                    <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                        Submit
                    </button>


                </div>

            </div>
        </div>
    );
};

export default AddPackage;
