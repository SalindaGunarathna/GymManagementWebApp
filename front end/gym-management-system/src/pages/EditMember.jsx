import image from '../componatas/images/editmember.png';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditMember = () => {
    const { memberId } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [packageNo, setPackageNo] = useState(''); // State to handle input for adding a package
    const [exercises, setExercises] = useState([]); 
    const [exercisesID,setExercisesID] = useState(''); 
   
    const [selectedExercisesList, setSelectedExercisesList] = useState([]);

    const [selectedExercise, setSelectedExercise] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching member data...");
                const response = await axios.get(`http://localhost:4000/member/${memberId}`);
                const fetchedMember = response.data;
                setMember(fetchedMember);
                setLoading(false);
    
                // Retrieve selected exercise numbers from the member
                const exerciseSheduleNumbers = fetchedMember.selectedExerciseNo;
    
                setSelectedExercisesList(exerciseSheduleNumbers);
    
                const exerciseShudelDetails = [];
    
                exerciseSheduleNumbers.forEach((exerciseNo) => {
                    // Make an API request to get exercise details by exercise number
                    axios.get(`http://localhost:4000/exercise/${exerciseNo}`)
                        .then((exerciseResponse) => {
    
                            exerciseShudelDetails.push(exerciseResponse.data);
    
                            // Once all exercises are fetched, set them in state
                            if (exerciseShudelDetails.length === exerciseSheduleNumbers.length) {
                                setSelectedExercise(exerciseShudelDetails);
                            }
                        })
                        .catch((error) => {
                            // Handle errors while fetching individual exercises
                            console.error(`Error fetching exercise ${exerciseNo}:`, error);
                        });
                });
            } catch (error) {
                console.log("Error fetching member data:", error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, [memberId]);
    
    


    const handleAddPackage = async () => {

        if (!packageNo) {
            alert('Please fill package No');
            return;
        }



        const url2 = `http://localhost:4000/member/${member.memberID}`;

        try {
            const response = await axios.put(url2, {
                packageNo: packageNo,
            });

            if (response.status === 200) {
                alert('Add package successfully updated');


                const updatedResponse = await axios.get(url2);
                const updatedMember = updatedResponse.data;
                setMember(updatedMember);

                

            }

        } catch (error) {
            console.error('Failed to update paid info', error);
        }

    };



    const handleGetExercises = () => {

        const packageNo = member.packageNo;

        // Fetch exercises for the given packageNo using an API request

        axios.get(`http://localhost:4000/package/4`)
            .then((response) => {

                const exerciseNumbers = response.data;

                // Fetch details for each exercise number
                const exerciseDetails = [];

                exerciseNumbers.forEach((exerciseNo) => {
                    // Make an API request to get exercise details by exercise number
                    axios.get(`http://localhost:4000/exercise/${exerciseNo}`)
                        .then((exerciseResponse) => {

                            exerciseDetails.push(exerciseResponse.data);

                            // Once all exercises are fetched, set them in state
                            if (exerciseDetails.length === exerciseNumbers.length) {
                                setExercises(exerciseDetails);
                            }
                        })
                        .catch((error) => {
                            // Handle errors while fetching individual exercises
                            console.error(`Error fetching exercise ${exerciseNo}:`, error);
                        });
                });
            })
            .catch((error) => {
                // Handle errors while fetching exercise numbers
                console.error('Error fetching exercise numbers:', error);
            });
    };




    const handleAddExerciseSchedule =async () => {

        if (!exercisesID) {
            alert('Please fill exercisesID');
            return;
        }
        setSelectedExercisesList([...selectedExercisesList, exercisesID]);

        const url2 = `http://localhost:4000/member/da`;

        try {
            const response = await axios.put(url2, {
                selectedExerciseNo: selectedExercisesList,
            });

            if (response.status === 200) {
                alert('Add Exercis successfully ');


                const updatedResponse = await axios.get(url2);
                const updatedMember = updatedResponse.data;
                setMember(updatedMember);

            }
            



        } catch (error) {
            console.error('Failed to update paid info', error);
        }


    };

    return (
        <div>
            <div className="bg-cover bg-center  h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="w-full ">
                    <div className="p-8 rounded-lg shadow-lg w-50">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <img
                                    src={member && member.profile}
                                    alt="Profile"
                                    className="w-48 h-48 rounded-full mx-auto mb-5"
                                />
                                <p className="text-center text-white text-2xl mb-4">
                                    {member.firstName}
                                </p>
                            </>
                        )}
                    </div>
                    <div className="text-xl p-5 bg-slate-900 bg-opacity-40
                 w-1/3 text-white mt-5 ml-10">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                <div className="mb-2">
                                    <span className='mr-12'>Name:</span>
                                    {member.firstName} {member.lastName}

                                </div>
                                <div className="mb-2">
                                    <span className='mr-12'>Age:</span> {member.age}
                                </div>
                                <div className="mb-2">
                                    <span className='mr-10'>Email:</span> {member.email}
                                </div>
                                <div className="mb-2">
                                    <span >Contact NO:</span> {member.contactNo}
                                </div>
                                <div className="mb-2">
                                    <span className='mr-10'>Weight:</span> {member.weight}
                                </div>
                                <div className="mb-2">
                                    <span className='mr-10'>Gender:</span> {member.gender}
                                </div>
                                <div className="mb-2">
                                    <span className='mr-4'> Paid State:</span> {member.paid}
                                </div>
                                <div className="mb-2">
                                    <span className='mr-10'>Paid Amount of Money:</span> {member.paidAmount}
                                </div>
                                <div className="mb-2">
                                    <span className='mr-10'>Packag NO:</span> {member.packageNo}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <div className="bg-gray-200 p-4">
                        <input
                            type="text"
                            placeholder="Package No"
                            className="w-48"
                            value={packageNo}
                            onChange={(e) => setPackageNo(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white px-3 py-1 ml-2"
                            onClick={handleAddPackage}
                        >
                            Add Package
                        </button>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-200 p-4">
                        <button
                            className="bg-blue-500 text-white px-3 py-1"
                            onClick={handleGetExercises}
                        >
                            Get Exercises
                        </button>
                    </div>
                    <div className="mt-4 border p-4 md-5">
                        <h2 className="text-lg font-semibold mb-2">Exercise List</h2>
                        <div className="flex space-x-4 text-sm font-semibold items-center">
                            <div className="w-1/5 font-bold">Exercise ID</div>
                            <div className="w-1/5 font-bold">Exercise Name</div>
                            <div className="w-1/5 font-bold">Video URL</div>
                            <div className="w-1/5 font-bold">Action</div>
                        </div>
                        {exercises.map((exercise) => (
                            <div key={exercise.exerciseID} className="flex space-x-4 items-center">
                                <div className="w-1/5">
                                        {exercise.exerciseID}
                                </div>
                                <div className="w-1/5">
                                    {exercise.exercisName}
                                </div>
                                <div className="w-1/5">{exercise.videioUrl}</div>
                                <div className="w-1/5">
                                   
                                </div>
                            </div>
                        ))}
                    </div>


                    <button
                        className="bg-blue-500 text-white px-3 py-1"
                        onClick={handleAddExerciseSchedule}
                    >
                        Add Exercise Schedule
                    </button>
                    <div>
                    <input
                            type="text"
                            placeholder=" Insert exercises no"
                            className="w-48 bg-slate-500"
                            value={exercisesID}
                            onChange={(e) => setExercisesID(e.target.value)}
                        />


                    </div>


                    <div className="mt-4 border p-4 md-5">
                        <h2 className="text-lg font-semibold mb-2">Exercise List</h2>
                        <div className="flex space-x-4 text-sm font-semibold items-center">
                            <div className="w-1/5 font-bold">Exercise ID</div>
                            <div className="w-1/5 font-bold">Exercise Name</div>
                            <div className="w-1/5 font-bold">Video URL</div>
                            <div className="w-1/5 font-bold">Action</div>
                        </div>
                        {selectedExercise.map((exercise) => (
                            <div key={exercise.exerciseID} className="flex space-x-4 items-center">
                                <div className="w-1/5">
                                        {exercise.exerciseID}
                                </div>
                                <div className="w-1/5">
                                    {exercise.exercisName}
                                </div>
                                <div className="w-1/5">{exercise.videioUrl}</div>
                                <div className="w-1/5">
                                   
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>


    );
}

export default EditMember;
