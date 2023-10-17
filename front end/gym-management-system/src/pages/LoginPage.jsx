
import image from '../componatas/images/loging2.png';

import React, { useEffect, useState } from 'react';


import axios from 'axios';


const LoginPage = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();


    return (
        <div>
            <div className='bg-cover flex bg-center bg-opacity-5  h-screen ' style={{ backgroundImage: `url(${image})` }}
            >
                <div className='w-1/5'>


                </div>
                <div className='w-3/5 '>
                    <div className='h-1/5'>

                    </div>
                    <div className='h-3/5 flex bg-slate-300 bg-opacity-25'>
                        <div className='w-1/2 p-10'>
                            <h1 className='text-bold text-2xl '>
                                Sign in
                            </h1>
                            <h2 className='text-2xl mt-5 '>
                                Email :
                            </h2>
                            <input
                                type="text"
                                placehoemail
                                className="w-60 bg-gray-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5 '>
                                Password :
                            </h2>
                            <input
                                type="text"
                                placehoemail
                                className="w-60  bg-gray-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <h2 className='text-2xl mt-5'>
                                Role:
                            </h2>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-60 bg-gray-400"
                            >
                                <option value="admin">Admin</option>
                                <option value="coach">Coach</option>
                                <option value="member">Member</option>
                            </select>


                        </div>
                        <div className='w-1/2 p-10'>
                            <h1 className='text-bold text-2xl'> Sign Up</h1>




                        </div>



                    </div>

                </div>
                <div className='w-1/5'>

                </div>




            </div>




        </div>
    )
}

export default LoginPage