import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios('https://shrouded-falls-48196.herokuapp.com/services')
            .then(data => setServices(data.data))
    }, []);
    const handleDelete = id => {
        axios.delete(`https://shrouded-falls-48196.herokuapp.com/services/${id}`)
            .then(data => {
                if (data.data.deletedCount) {
                    alert('deleted successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;