
import image from '../componatas/images/logingNew.png';
import { useEffect, useState } from 'react';
// import React, { useState } from 'react';

import jwt_decode from "jwt-decode";

import axios from 'axios';
const AddMemeber = () => {
  //  <script src="https://accounts.google.com/gsi/client" async defer></script>

    const [memberID, setMemberID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState('');

    const [contactNo, setContactNo] = useState('');

    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

    const [googleAutho, setGoogleAuth] = useState(false);






    // function handleCredentialResponse(res) {
    //     console.log("encode jwt ID token" + res.credential);
    //     var userObject = jwt_decode(res.credential);
    //     console.log(userObject);

    //     setUser(userObject);
    //     setGoogleAuth("google");
    //     document.getElementById("signInDiv").hidden = true;

    //     console.log(googleAutho);

    // }




    // useEffect(() => {


    //     /* global google */
    //     try {
    //         google.accounts.id.initialize({

    //             client_id: "1078634557844-5uq383t1midhavuvgnn3rbur2gujjp6m.apps.googleusercontent.com",
    //             callback: handleCredentialResponse
    //         })

    //         google.accounts.id.renderButton(
    //             document.getElementById("signInDiv"),
    //             { theme: "outline", size: "large" }
    //         );


    //     } catch (error) {

    //     }

    // }, []);







    const handleButtonClick = () => {
        // Gather the data from state variables



        setGoogleAuth(user.email_verified)

        setMemberID(user.sub);



        setFirstName(user.given_name);

        setLastName(user.family_name);
        setEmail(user.email);
        setProfile(user.picture);

        setPassword(user.aud)


        console.log(googleAutho);



        if (googleAutho == true) {

            var data = {
                memberID,
                firstName,
                lastName,
                email,
                profile,
                password,

            };


        } else {

            var data = {
                memberID,
                firstName,
                lastName,
                email,
                contactNo,
                password,

            };

        }




        const databaseEndpoint = 'http://localhost:4000/member';

        if (memberID) {

            try {

                axios.post(databaseEndpoint, data)
                .then((response) => {
                    console.log('Data submitted successfully:', response.data);
                    alert('Create Account successfully');

                    //window.location.reload();


                })
                .catch((error) => {
                    console.error('Error submitting data:', error);
                });

                
            } catch (error) {

                alert('Member Id  is not define ');
                
            }
           

        }




    };

    return (

        <div>
            <div className='bg-cover bg-center bg-opacity-5  h-screen ' style={{ backgroundImage: `url(${image})` }}>
                <div className='flex'>
                    <div className='w-1/3  p-5'>


                    </div>
                    <div className=' text-clip p-5 ml-80 mb-5 h-1/10 w-1/3'>
                        <h1 className='text-5xl justify-center ml-15 ' > </h1>


                        <div class="w-full ml- max-w-sm p-10 mt-20 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
                            style={{ borderRadius: '10px' }}
                        >
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member Id</label>
                            <input
                                type="text"
                                placeholder="Member Id"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required

                                onChange={(e) => setMemberID(e.target.value)}
                            />
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email </label>
                            <input
                                type="email"
                                placeholder="email@gmail.com"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                            <input
                                type="text"
                                placeholder="Password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No</label>
                            <input
                                type="text"
                                placeholder="Mobile No"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                            />

                        </div>
                        {/* <div className="App">

                            <div id="signInDiv"></div>
                            {
                                Object.keys(user).length != 0



                            }

                        </div> */}


                        <button className="bg-blue-500 text-white p-2 ml-15 mt-2 w-40 rounded-md" onClick={handleButtonClick}>
                            Submit data
                        </button>
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
