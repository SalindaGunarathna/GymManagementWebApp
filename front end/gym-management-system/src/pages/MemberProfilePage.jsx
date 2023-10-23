import image from '../componatas/images/addCoach.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MemberProfilePage = () => {

    const jwtToken = localStorage.getItem('Token');
    console.log(jwtToken);

    const ID = localStorage.getItem('id');

    console.log(ID);

    const [profile, setProfile] = useState('');
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

    const [exerciseID, setExerciseID] = useState();
    const [exerciseNeme, setExerciseName] = useState();
    const [exerciseURL, setExerciseURL] = useState();



    useEffect(() => {



        const url = `http://localhost:4000/member/${ID}`;



        const fetchData = async () => {
            try {
                const response = await axios.get(url,
                    {
                        headers: { authorization: "Bearer " + jwtToken},
                    }
                    );





                const fetchedCoach = response.data;

                console.log(fetchedCoach);



                setFirstName(fetchedCoach.firstName);
                setLastName(fetchedCoach.lastName);
                setAge(fetchedCoach.age);
                setEmail(fetchedCoach.email);
                setContactNo(fetchedCoach.contactNo);
                setProfile(fetchedCoach.profile);
                setWeight(fetchedCoach.weight);
                setHeight(fetchedCoach.height);
                setGender(fetchedCoach.gender);
                setPaid(fetchedCoach.paid);
                setPaidAmount(fetchedCoach.paidAmount);
                setPackageNo(fetchedCoach.packageNo);
                setSelectedExerciseNo(fetchedCoach.selectedExerciseNo);
                setPassword(fetchedCoach.password);



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

        const databaseEndpoint = `http://localhost:4000/member/${ID}`;

        axios
            .put(databaseEndpoint, data)
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

        //const packageNo =packageNo;

        // Fetch exercises for the given packageNo using an API request

        if (packageNo) {
            axios.get(`http://localhost:4000/package/${packageNo}`)
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

        }


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
                            <p className='text-white text-2xl ml-12'> Add profile URL </p>
                            <input
                                type="text"
                                placeholder="Profile URL"
                                className="w-80 bg-slate-500 ml-12"
                                value={profile}
                                onChange={handleProfileChange}
                            />
                        </div>
                    </div>
                    <div className='p-10'>
                        <div className=' flex  bg-slate-700 bg-opacity-50' style={{ borderRadius: '20px' }}>
                            <div className='m-10 '>
                                <h2 className='text-2xl mt-5'> First Name  </h2>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'> Last  name </h2>
                                <input
                                    style={{ borderRadius: '20px' }}
                                    type="text"
                                    placeholder="Last Name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'> Email  </h2>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'> Mobile No 1 </h2>
                                <input
                                    type="text"
                                    placeholder="Mobile No"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                />
                                <h2 className='text-2xl mt-5'>Change Password </h2>
                                <input
                                    type="password"
                                    placeholder="New Password "
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='flex'>
                                <div className='m-10'>
                                    <h2 className='text-2xl mt-5'> Age </h2>
                                    <input
                                        type="text"
                                        placeholder="Age "
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                    <h2 className='text-2xl mt-5'> Weight </h2>
                                    <input
                                        type="text"
                                        placeholder="Weight "
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                    <h2 className='text-2xl mt-5'> Height </h2>
                                    <input
                                        type="text"
                                        placeholder="Height "
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                    <h2 className='text-2xl mt-5'> Gender </h2>
                                    <input
                                        type="text"
                                        placeholder="Gender "
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    <h2 className='text-2xl mt-5'> Paid state </h2>
                                    <p className='text-2xl'> {paid}</p>
                                    <h2 className='text-2xl mt-5'> Paid amount </h2>
                                    <p className='text-2xl'> {paidAmount}</p>
                                    <h2 className='text-2xl mt-5'> Package no </h2>
                                    <p className='text-2xl'> {packageNo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white '>
            </div>
            <div className='bg-black'>
                <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                    Save
                </button>
                <Link to="/">
                    <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" >
                        Log out
                    </button>
                </Link>
            </div>
            <div>
                <div className="bg-black p-10">
                    <button className="bg-blue-500 text-white px-3 py-1" onClick={handleGetExercises}>
                        See Exercises
                    </button>
                </div>
                <div className="border p-4 bg-black text-white p-5">
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
                            <div className="w-1/5">
                                <a href={exercise.videioUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>


                            </div>
                            <div className="w-1/5">

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberProfilePage;
