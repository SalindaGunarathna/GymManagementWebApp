import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        company: '',
        image: null,
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
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = new FormData();
        productData.append('name', formData.name);
        productData.append('description', formData.description);
        productData.append('price', formData.price);
        productData.append('company', formData.company);
        productData.append('image', formData.image);

        try {
            const response = await axios.post('http://localhost:3001/api/v1/products', productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then
                (function (response) {
                    console.log(response);
                    window.location.href = "/products";
                }).catch(function (error) {
                    
                    

































































































































































































































































































































































































































































































































































































































































































































































                    
                    console.log(error);
                });

            // Handle the response as needed
            console.log('Product created:', response.data);

            // Clear the form
            setFormData({
                name: '',
                description: '',
                price: '',
                company: '',
                image: null,
            });
        } catch (error) {
            // Handle error
            console.error('Error creating product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
            </div>
            <div>
                <label>Price:</label>
                <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
            </div>
            <div>
                <label>Company:</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" onChange={handleImageChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateProduct;
