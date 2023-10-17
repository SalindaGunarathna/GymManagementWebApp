
import image from '../componatas/images/AddAdmin.png';

import React, { useState } from 'react';
import axios from 'axios';
const AddNewAdmin = () => {
    const [profile, setProfile] = useState('https://img.freepik.com/free-photo/portrait-young-handsome-sportsman-holds-hand-chin-dark-background_613910-19200.jpg?size=626&ext=jpg&ga=GA1.1.1596761328.1697264654&semt=ais');

    const [adminRegNo, setAdminRegNo] = useState('');
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');

    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const [privilager, setPrivilager] = useState();

    const handleProfileChange = (e) => {
        const imageUrl = e.target.value;
        setProfile(imageUrl);
    };

   

    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {
            adminRegNo,
            firstName,
            lastName,
            email,
            contactNo,
            password,
            role,
            profile,
            privilager,
        };


        const databaseEndpoint = 'http://localhost:4000/admin';


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
                        <h1 className='text-5xl justify-center ml-15'> New Admin Profile</h1>
                        <h2 className='text-2xl mt-5'> Registration Number  </h2>
                        <input
                            type="text"
                            placeholder="Coach Id"
                            className="w-60 text-black"
                            value={adminRegNo}
                            onChange={(e) => setAdminRegNo(e.target.value)}
                        />
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
                        
                        <h2 className='text-2xl mt-5'> Mobile No </h2>
                        <input
                            type="text"
                            placeholder="Mobile No"
                            className="w-60 text-black"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                        />
                        <h2 className='text-2xl mt-5'> Pasword </h2>
                        <input
                            type="text"
                            placeholder="Pasword"
                            className="w-60 text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <h2 className='text-2xl mt-5'> Role </h2>
                        <input
                            type="text"
                            placeholder="Role"
                            className="w-60 text-black"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                       


                    </div>
                </div>
            </div>
            <div className='bg-black text-white '>

                

            </div>
            <div className='bg-black'>
                <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                    Submit
                </button>


            </div>

        </div>
    );
};

export default AddNewAdmin;
