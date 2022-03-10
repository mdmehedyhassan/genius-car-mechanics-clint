import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://shrouded-falls-48196.herokuapp.com/services', data)
            .then(data => {
                console.log(data)
                if(data?.data?.insertedId){
                    alert('Service Added successfully!!!')
                    reset();
                }
            })
    };
    
    return (
        <div className="add-service">
            <h1 className="text-primary mt-3 text-center border-bottom border-4 border-primary fw-bold mb-5">Add New service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="form-control" />
                <textarea {...register("description", { required: true})} placeholder="Description"  />
                <input type="number" {...register("price", { required: true, min: 10 })} placeholder="price" className="form-control" />
                <input {...register("img", { required: true})} placeholder="image URL" className="form-control" />
                <input type="submit" value="Add Service" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default AddService;