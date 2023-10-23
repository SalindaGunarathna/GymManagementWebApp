import React, { useEffect, useState } from "react";

import image from "../componatas/images/logingNew.png";
import axios from "axios";
import { Link, Navigate, Route, Switch } from "react-router-dom";
import AdminPage from "./AdminPage";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = () => {

   // <script src="https://accounts.google.com/gsi/client" async defer></script>

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Admin");
    //const [user, setUser] = useState("");
    const [admin, setAdmin] = useState(false);


    const [user, setUser] = useState({});

    const [googleAutho, setGoogleAuth] = useState(false);












    const handleSignIn = async () => {

        setUser(email);

        //console.log(password);
       // console.log(email);



        if (role === "Admin") {

            console.log(password);
            console.log(email);
            
            
            try {
                const adminUrl = 'http://localhost:4000/admin/login'

                const adminResponse = await axios.post(adminUrl, {
                    email: email,
                    password: password

                });

                const token = adminResponse.data;

                console.log(adminResponse);
                console.log(email);

                console.log(token.token);
                console.log(token.admin.adminRegNo);


                localStorage.setItem('Token', token.token);
                localStorage.setItem('id', token.admin.adminRegNo)

                window.location.href = '/admin'

                if (token.admin.adminRegNo) {
                    setUser("Is");
                    window.location.href = '/admin'
                } else {
                    setUser("not");
                }

            } catch (error) {
                setUser("not");
            }
            
           
        }
       


        if (role === "member" ){

           // setEmail(user.email)
           // setPassword(user.aud)


            try {
                console.log(password);
                console.log(email);
                const membernUrl = 'http://localhost:4000/member/login'

                const memberResponse = await axios.post(membernUrl, {
                    email: email,
                    password: password

                });

                const token = memberResponse.data;

                console.log(token.member.memberID);


                localStorage.setItem('Token', token.token);
                localStorage.setItem('id', token.member.memberID)

                if (token.member.memberID) {
                    setUser("Is");
                    window.location.href = '/member/'
                } else {
                    setUser("not");
                }

            } catch (error) {
                setUser("not");
            }

        }


        if (role === "coach") {

            try {
                console.log(password);
                console.log(email);

                const coachrnUrl = 'http://localhost:4000/coach/login'

                const coachResponse = await axios.post(coachrnUrl, {
                    email: email,
                    password: password

                });

                const token = coachResponse.data;

                console.log(coachResponse);

                console.log(token.coach.coachID);


                localStorage.setItem('Token', token.token);
                localStorage.setItem('id', token.coach.coachID)

                if (token.coach.coachID) {
                    setUser("Is");
                    window.location.href = '/coach/'
                } else {
                    setUser("not");
                }


            } catch (error) {
                setUser("not");

            }
        }

        // ...
    };


    return (
        <div>
            <div
                className="bg-cover flex bg-center bg-opacity-5  h-screen "
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="w-1/5"></div>
                <div className="w-2/5"></div>
                <div className="w-2/5   p-10">

                    <div class="w-full ml- max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" action="#">
                            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                >
                                </input>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="text" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                >

                                </input>


                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="coach">Coach</option>
                                    <option value="member">Member</option>
                                </select>


                            </div>
                            <div class="flex items-start">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" >
                                        </input>
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>

                            </div>
                            {user === "Is" ? (
                                <p className="text-blue-500">user is finded.</p>
                            ) : (
                                user === "not" ? (
                                    <p className="text-blue-900 ">User deatils submited .</p>
                                ) : (
                                    <p></p>
                                )
                            )}



                            <button
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleSignIn}
                            >Login to your account</button>

                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </form>

                    </div>
                    <div className="p-1 ml-20">
                        {/* <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Sign in with Google
                        </button> */}
                       
                    </div>



                </div>
                <div className="w-1/5"></div>
            </div>
        </div>



    );
};

export default LoginPage;