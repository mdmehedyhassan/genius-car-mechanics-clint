import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import unknownSvg from '../../images/svg/unknown.svg';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const { user } = useAuth();
    const [unknown, setUnknown] = useState(false);
    useEffect(() => {
        axios('https://shrouded-falls-48196.herokuapp.com/services')
            .then(data => setServices(data.data))
    }, []);
    const handleDelete = id => {
        if (user?.email === 'mdmehedyh55@gmail.com') {
            if(window.confirm("Are you sure you want to delete this service?")) {
                axios.delete(`https://shrouded-falls-48196.herokuapp.com/services/${id}`)
                .then(data => {
                    if (data.data.deletedCount) {
                        alert('deleted successfully')
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
            }
        }
        if (user?.email !== 'mdmehedyh55@gmail.com') {
            alert("Only this website owner can delete any service!!!")
            setUnknown(true);
        }

    }
    return (
        <div>
            <h1 className="text-center text-primary mt-4 mb-3 border-bottom border-4 border-primary">Manage Services</h1>
            {unknown && <div className="text-center">
                <h1 className="text-danger">Sorry You cannot delete any Service. Only this website owner can delete any service. Thanks</h1>
                <img className="w-75" src={unknownSvg} alt="" />
            </div>}
            {
                services.map(service => <div className="text-primary border-4 d-flex justify-content-between border m-2 p-3 border-primary rounded-pill" key={service._id}>
                    <h3>{service?.name}</h3>
                    <button className="btn btn-danger rounded-pill" onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;