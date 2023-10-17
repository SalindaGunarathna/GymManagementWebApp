
import image from '../componatas/images/addCoach.png';

import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';


const AddCoach = () => {
    const [profile, setProfile] = useState('https://img.freepik.com/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg?size=626&ext=jpg&ga=GA1.1.1596761328.1697264654&semt=ais');




    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [paid, setPaid] = useState('');
    const [paidAmount, setPaidAmount] = useState('');
    const [packageNo, setPackageNo] = useState('');
    const [exercises, setExercises] = useState([]);

    const [selectedExerciseNo, setSelectedExerciseNo] = useState([]);





    const [qualification, setQualifications] = useState([]);

    const [member, setMembe] = useState([]);


    const url = " http://localhost:4000/member/a";

    useMemo(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const fetchedCoach = response.data;

                setMembe(fetchedCoach);

                setFirstName(fetchedCoach.firstName);
                setLastName(fetchedCoach.lastName);
                setAge(fetchedCoach.age);
                setEmail(fetchedCoach.email);
                setPassword(fetchedCoach.password);
                setContactNo(fetchedCoach.contactNo);
                setProfile(fetchedCoach.profile);
                setWeight(fetchedCoach.weight);
                setHeight(fetchedCoach.height);
                setGender(fetchedCoach.gender);
                setPaid(fetchedCoach.paid);
                setPaidAmount(fetchedCoach.paidAmount);
                setPackageNo(fetchedCoach.packageNo);

                setSelectedExerciseNo(fetchedCoach.selectedExerciseNo);












            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);











    const handleProfileChange = (e) => {
        const imageUrl = e.target.value;
        setProfile(imageUrl);
    };


    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {

            selectedExerciseNo,
            packageNo,
            paid,
            gender,
            height,
            weight,
            age,
            password,
            contactNo,
            email,
            lastName,
            firstName,
            paidAmount,
            profile


        };


        const databaseEndpoint = 'http://localhost:4000/member/a';


        axios.put(databaseEndpoint, data)
            .then((response) => {
                console.log('Data submitted successfully:', response.data);
                alert('Data submitted successfully');

                window.location.reload();


            })
            .catch((error) => {
                console.error('Error submitting data:', error);
            });
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






    return (
        <div>
            <div className='bg-cover bg-center bg-opacity-5  h-screen ' style={{ backgroundImage: `url(${image})` }}>
                <div className='flex'>
                    <div className='w-1/3  p-5'>
                        <div>
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-90 h-80  mx-auto mb-5"
                                style={{ borderRadius: '10%' }}
                            />
                            <p className='text-white text-2xl ml-12'> Add profile Url </p>
                            <input
                                type="text"
                                placeholder="Profile URL"
                                className="w-80 bg-slate-500 ml-12"
                                value={profile}
                                onChange={handleProfileChange}
                            />

                        </div>
                    </div>
                    <div className=' text-white p-5'>
                        <h1 className='text-5xl justify-center ml-15'>Profile</h1>

                        <div className='flex bg-slate-300 bg-opacity-25 '>

                            <div className='m-10'>

                                <h2 className='text-2xl mt-5'> First Name  </h2>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-60 text-black"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'> Last  name </h2>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-60 text-black"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'> Email  </h2>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-60 text-black"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <h2 className='text-2xl mt-5'> Mobile No 1 </h2>
                                <input
                                    type="text"
                                    placeholder="Mobile No"
                                    className="w-60 text-black"
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'>Change Pasword </h2>
                                <input
                                    type="text"
                                    placeholder="New Password "
                                    className="w-60 text-black"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </div>

                            <div className='m-10'>
                                <h2 className='text-2xl mt-5'> Age </h2>
                                <input
                                    type="text"
                                    placeholder="Age "
                                    className="w-60 text-black"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'>weight </h2>
                                <input
                                    type="text"
                                    placeholder="weight "
                                    className="w-60 text-black"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'> </h2>
                                <input
                                    type="text"
                                    placeholder="New Password "
                                    className="w-60 text-black"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'>gender </h2>
                                <input
                                    type="text"
                                    placeholder="gender "
                                    className="w-60 text-black"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'>Paid state </h2>
                                <p> {paid}</p>
                                <h2 className='text-2xl mt-5'>Paid amont </h2>
                                <p> {paidAmount}</p>
                                <h2 className='text-2xl mt-5'>Package no </h2>
                                <p> {packageNo}</p>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
            <div className='bg-black text-white '>




            </div>
            <div className='bg-black'>
                <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                   save 
                </button>


            </div>
            <div>

            <div className="bg-black p-10">
                        <button
                            className="bg-blue-500 text-white px-3 py-1"
                            onClick={handleGetExercises}
                        >
                            See Exercises
                        </button>
                    </div>
                    <div className=" border p-4  bg-black text-white p-5">
                        <h2 className="text-lg font-semibold mb-2">Schedule Exercise List</h2>
                        <div className="flex space-x-4 text-sm font-semibold items-center">
                            <div className="w-1/5 font-bold">Exercise ID</div>
                            <div className="w-1/5 font-bold">Exercise Name</div>
                            <div className="w-1/5 font-bold">Video URL</div>
                            
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



                
            </div>

        </div>
    );
};

export default AddCoach;
