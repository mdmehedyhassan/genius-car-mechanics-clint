import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(data => {
                console.log(data)
                reset();
            })
    };
    
    return (
        <div className="add-service">
            <h1>this is service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price", { required: true, min: 10 })} placeholder="price" />
                <input {...register("img")} placeholder="image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;