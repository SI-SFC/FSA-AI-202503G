import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const handleform = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("image", image);

        const response = await axios.post("http://localhost:3000/api/product", formData);
        console.log(response.data);
        alert("Product Created Successfully");
        setName("");
        setPrice("");
        setImage(null);
        navigate("/getproduct")
    }

  return (
    <>
    <div className="container my-5">
        <h2 className="text-center">Product Management</h2>
        <hr className="w-50 mx-auto" />
        <div className="w-50 mx-auto">
            <form onSubmit={handleform}>
                <div className="mb-3">
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Product Price</label>
                    <input type="text" className="form-control" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Product Image</label>
                    <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="text-center">
                    <button className="btn btn-dark w-50">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
export default CreateProduct