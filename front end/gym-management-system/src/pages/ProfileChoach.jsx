
import image from '../componatas/images/addCoach.png';
import { Link } from 'react-router-dom'
import React, {useMemo,useEffect, useState } from 'react';
import axios from 'axios';
const AddCoach = () => {
    const [profile, setProfile] = useState('https://img.freepik.com/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg?size=626&ext=jpg&ga=GA1.1.1596761328.1697264654&semt=ais');


    const [coachID, setCoachId] = useState('');
    const [description, setDescription] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
    const [mobileNO, setMobileNo] = useState('');
    const [password, setPassword] = useState('');
    const [qualification, setQualifications] = useState([]);

    const [coach, setCoach] = useState([]);

    const ID = localStorage.getItem('id');
    
    //const url = "http://localhost:4000/coach/ba";

    useEffect(() => {


       
        const ID = localStorage.getItem('id');
        console.log(ID);

        const url = `http://localhost:4000/coach/${ID}`;
        

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const fetchedCoach = response.data;
                setCoach(fetchedCoach);

                setProfile(fetchedCoach.profile);
                setCoachId(fetchedCoach.coachID);
                setDescription(fetchedCoach.description);
                setFirstName(fetchedCoach.firstName);
                setLastName(fetchedCoach.lastName);
                setEmail(fetchedCoach.email);
                
                setMobileNo(fetchedCoach.mobileNO);
                
                // const [qualification, setQualifications] = useState([]);
                setQualifications(fetchedCoach.qualification);










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

    const addQualification = () => {
        setQualifications([...qualification, '']);
    };

    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {
            coachID,
            firstName,
            lastName,
           
            mobileNO,
            password,
            description,
            profile,
            qualification,
        };


        const databaseEndpoint = 'http://localhost:4000/coach/ba';


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
                            <p className='text-white text-2xl mt-5 ml-12'> Your self </p>
                            <textarea
                                placeholder="Write something about Coach"
                                className="w-80 h-40 bg-slate-500 ml-12 bg-opacity-10 text-white"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className=' text-white p-5'>
                        <h1 className='text-5xl justify-center ml-15'>Profile</h1>
                       
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
                            type="text"
                            placeholder="Last Name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <h2 className='text-2xl mt-5'> Email  </h2>
                        <h2 className='text-2xl mt-5'> {email}  </h2>
                        
                        <h2 className='text-2xl mt-5'> Mobile No 1 </h2>
                        <input
                            type="text"
                            placeholder="Mobile No"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={mobileNO}
                            onChange={(e) => setMobileNo(e.target.value)}
                        />
                        <h2 className='text-2xl mt-5'>Change Pasword </h2>
                        <input
                            type="text"
                            placeholder="New Password "
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />


                    </div>
                </div>
            </div>
            <div className='bg-black text-white '>

                <h2 className='text-2xl  ml-10'> Qualifications... </h2>
                {qualification.map((qualificationnew, index) => (
                    <input
                        type="text"
                        placeholder="Qualification"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={qualificationnew}
                        onChange={(e) => {
                            const updatedQualifications = [...qualification];
                            updatedQualifications[index] = e.target.value;
                            setQualifications(updatedQualifications);
                        }}
                        key={index}
                    />
                ))}
 

                <button className="bg-gray-700 text-white p-2 mt-2 ml-5 w-40 rounded-md" onClick={addQualification}>
                    Add Qualification
                </button>



            </div>
            <div className='bg-black'>
                <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                    Save
                </button>
                <Link to ="/">
                <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" >
                    Log out
                </button>
                </Link>
                

            </div>

        </div>
    );
};

export default AddCoach;
