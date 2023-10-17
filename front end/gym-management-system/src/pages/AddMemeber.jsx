
import image from '../componatas/images/createAcount.png';

import React, { useState } from 'react';
import axios from 'axios';
const AddMemeber = () => {
    
    const [memberID, setMemberID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
   
    const [contactNo, setContactNo] = useState('');

    const [password, setPassword] = useState('');

    

   

    const handleButtonClick = () => {
        // Gather the data from state variables
        const data = {
            memberID,
            firstName,
            lastName,
            email,
            contactNo,
            password,
           
           
        };


        const databaseEndpoint = 'http://localhost:4000/member';


        axios.post(databaseEndpoint, data)
            .then((response) => {
                console.log('Data submitted successfully:', response.data);
                alert('Create Account successfully');

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


                    </div>
                    <div className=' text-clip p-5 ml-80 mb-5 h-1/10 w-1/3'>
                        <h1 className='text-5xl justify-center ml-15 ' > </h1>


                        <div className='h-5/10 bg-slate-300 bg-opacity-25 p-5'>
                            <h2 className='text-2xl '> Member Id  </h2>
                            <input
                                type="text"
                                placeholder="Member Id"
                                className="w-60 text-black"
                                onChange={(e) => setMemberID(e.target.value)}
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
                            <h2 className='text-2xl mt-5'> Password </h2>
                            <input
                                type="text"
                                placeholder="Password"
                                className="w-60 text-black"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'> Mobile No </h2>
                            <input
                                type="text"
                                placeholder="Mobile No"
                                className="w-60 text-black"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                            />
                           
                        </div>

                    
                            <button className="bg-blue-500 text-white p-2 ml-15 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                                Create Account 
                            </button>


                        


                    </div>
                </div>
            </div>



        </div>
    );
};

export default AddMemeber;
