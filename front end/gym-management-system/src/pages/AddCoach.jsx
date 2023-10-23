
import image from '../componatas/images/addCoach.png';
import AdminNavBar from '../componatas/adminNavBar/AdminNavBar';
import React, { useState } from 'react';
import axios from 'axios';
const AddCoach = () => {

    const jwtToken = localStorage.getItem('Token');
  console.log(jwtToken);

    const [profile, setProfile] = useState('https://media.istockphoto.com/id/1359558763/photo/portrait-of-a-muscular-young-man-writing-notes-on-a-clipboard-while-working-in-a-gym.jpg?s=612x612&w=0&k=20&c=uT6wvz0chhixvjop2GnTh_uTMmiO4X05rho1T3qOzOo=');

    const [coachID, setCoachId] = useState('');
    const [description, setDescription] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo1, setMobileNo1] = useState('');

    const [password, setPassword] = useState('');

    const [qualifications, setQualifications] = useState([]);

    const handleProfileChange = (e) => {
        const imageUrl = e.target.value;
        setProfile(imageUrl);
    };

    const addQualification = () => {
        setQualifications([...qualifications, '']);
    };

    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {
            coachID,
            firstName,
            lastName,
            email,

            mobileNo1,
            password,
            description,
            profile,
            qualifications,
        };


        const databaseEndpoint = 'http://localhost:4000/coach';


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
                        <div className=' text-white bg-slate-400 bg-opacity-25 mt-5 p-5'  style={{ borderRadius: '20px' }}>
                            <h1 className='text-5xl justify-center ml-15'> New Coach Profile</h1>
                            <h2 className='text-2xl mt-5'> Coach Id </h2>
                            <input
                                type="text"
                                placeholder="Coach Id"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required
                                   
                                onChange={(e) => setCoachId(e.target.value)}
                            />
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
                            <input
                                type="text"
                                placeholder="Email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <h2 className='text-2xl mt-5'> Mobile No 1 </h2>
                            <input
                                type="text"
                                placeholder="Mobile No 1"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={mobileNo1}
                                onChange={(e) => setMobileNo1(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'> Pasword </h2>
                            <input
                                type="text"
                                placeholder="Mobile No 1"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />


                        </div>
                    </div>
                </div>
                <div className='bg-black text-white '>

                    <h2 className='text-2xl  ml-10'> Qualifications... </h2>
                    {qualifications.map((qualification, index) => (
                        <input
                            type="text"
                            placeholder="Qualification"
                            className="w-60 text-black ml-10 "
                            value={qualification}
                            onChange={(e) => {
                                const updatedQualifications = [...qualifications];
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
                        Submit
                    </button>


                </div>

            </div>
        </div>
    );
};

export default AddCoach;
