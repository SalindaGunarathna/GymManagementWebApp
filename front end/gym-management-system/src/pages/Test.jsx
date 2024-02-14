import React from 'react';

import { useState } from 'react';
import axios from 'axios';
import backGroundimage from '../componatas/images/AddExercise.png';
function Test() {


    const [image, setImage] = useState("hool");

   

    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        adminRegNo: '',
        password: '',
        profile: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            profile: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = new FormData();
        productData.append('firstName', formData.firstName);
        productData.append('email', formData.email);
        productData.append('adminRegNo', formData.adminRegNo);
        productData.append('password', formData.password);
        productData.append('profile', formData.profile);


        //console.log(productData);


        try {
            const response = await axios.post('http://localhost:4000/admin', productData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then
                (function (response) {
                    console.log(response)

                }).catch(function (error) {
                    alert("Error Try again");
                    console.log(error);
                });

            // Handle the response as needed
            console.log('Product created:', response.data);

            // Clear the form
            setFormData({
                firstName: '',
                email: '',
                adminRegNo: '',
                password: '',
                profile: null,
            });
        } catch (error) {
            // Handle error
            console.error('Error creating product:', error);
        }
    };

    const seeProfile = async (e) => {
        e.preventDefault();

        console.log('hello');

        try {

            const result = await axios.get("http://localhost:4000/admin/vx");

            setImage(result.data.profile);


            console.log(image);

             
           
            //console.log(result.data.profile);


        } catch (error) {
           
            console.log(error);


        }

        
    }

    return (

        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>firstName:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </div>
            <div>
                <label>email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <label>adminRegNo:</label>
                <input type="text" name="adminRegNo" value={formData.adminRegNo} onChange={handleInputChange} />
            </div>
            <div>
                <label>password:</label>
                <input type="text" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" onChange={handleImageChange} />
            </div>
            <button type="submit">Submit</button>

           
        </form>
        <button className="bg-blue-500 text-white p-2 ml-5 mt-2 w-40 rounded-md" onClick={seeProfile}>
            seeProfile
        </button>


            <div>
                <img
                    src={`http://localhost:4000/${image}`}
                    // alt="Profile"
                    className="w-90 h-80  mx-auto mb-5"
                    style={{ borderRadius: '10%' }}
                />
            </div>
        </div>
    );
}

export default Test;
