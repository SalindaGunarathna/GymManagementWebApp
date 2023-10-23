
import image from '../componatas/images/addCoach.png';

import React, { useEffect,  useState } from 'react';
import axios from 'axios';


const AddCoach = () => {

    console.log("membership");


   /* 
    const [profile, setProfile] = useState();



    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [contactNo, setContactNo] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [gender, setGender] = useState();
    const [paid, setPaid] = useState();
    const [paidAmount, setPaidAmount] = useState();
    const [packageNo, setPackageNo] = useState();
    const [exercises, setExercises] = useState([]);

    const [selectedExerciseNo, setSelectedExerciseNo] = useState([]);





   // const [qualification, setQualifications] = useState([]);

    const [member, setMembe] = useState([]);

    const ID = localStorage.getItem('id');

    const userID =  parseInt(localStorage.getItem('id'));

    console.log(ID);




    /*
   // console.log(userID);

    const url = `http://localhost:4000/member/${userID}`;

    useEffect(() => {

        /*

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
    
    */








/*

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

/*
    const handleGetExercises = () => {

        const packageNo = member.packageNo;

        // Fetch exercises for the given packageNo using an API request
        // localStorage.setItem('id', token.member.memberID)

        const userID =  parseInt(localStorage.getItem('id'));
        console.log(userID);
        axios.get(`http://localhost:4000/package/${userID}`)
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




*/

    return (
        <div>
            <div >
                
            </div>

        </div>
    )
};

export default AddCoach;
