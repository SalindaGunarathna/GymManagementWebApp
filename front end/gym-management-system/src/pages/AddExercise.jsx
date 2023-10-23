
import backGroundimage from '../componatas/images/AddExercise.png';

import React, { useState } from 'react';
import axios from 'axios';
import AdminNavBar from '../componatas/adminNavBar/AdminNavBar';

const AddExercise = () => {
    const [image, setImage] = useState('https://www.dmoose.com/cdn/shop/articles/Main-Image_f389f0f9-ef75-42ec-98bf-0f0259ad540a.jpg?v=1666358433');


    const [exerciseID, setExerciseID] = useState('');
    
    const [exercisName, setExercisName] = useState('');
    
    const [videioUrl, setVideioUrl] = useState('');
    
    
    const [step, setStep] = useState([]);

    const handleProfileChange = (e) => {
        const imageUrl = e.target.value;
        setImage(imageUrl);
    };

    const addExerciseNo = () => {
        setStep([...step, '']);
    };

    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {
            exerciseID,
            exercisName,
            videioUrl,  
            step,
            image,
           
        };


        const databaseEndpoint = 'http://localhost:4000/exercise';


        axios.post(databaseEndpoint, data)
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
                            
                        </div>
                    </div>
                    <div className=' text-white p-5 bg-slate-400 bg-opacity-25'
                     style={{ borderRadius: '20px' }}
                    >
                        <h1 className='text-5xl justify-center ml-15'> New Exercise</h1>
                        <h2 className='text-2xl mt-5'> Exercise No   </h2>
                        <input
                            type="text"
                            placeholder="Exercise No"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            onChange={(e) => setExerciseID(e.target.value)}
                        />
                        <h2 className='text-2xl mt-5'> Exercise Name  </h2>
                        <input
                            type="text"
                            placeholder="Exercise Name "
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            value={exercisName}
                            onChange={(e) => setExercisName(e.target.value)}
                        />
                        
                        <h2 className='text-2xl mt-5'>vedio link </h2>
                        <input
                            type="text"
                            placeholder="Minimum Weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            value={videioUrl}
                            onChange={(e) => setVideioUrl(e.target.value)}
                        />
                       
                        


                    </div>
                </div>
            </div>
            <div className='bg-black text-white '>

                <h2 className='text-2xl  ml-10'> Steps... </h2>
                {step.map((exerciseStep, index) => (
                    <input
                        type="text"
                        placeholder="Exercise Step"
                        className="w-60 text-black ml-10 "
                        value={exerciseStep}
                        onChange={(e) => {
                            const updatedsetStep = [...step];
                            updatedsetStep[index] = e.target.value;
                            setStep(updatedsetStep);
                        }}
                        key={index}
                    />
                ))}


                <button className="bg-gray-700 text-white p-2 mt-2 ml-5 w-40 rounded-md" onClick={addExerciseNo}>
                 Add New Step Number
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

export default AddExercise;
