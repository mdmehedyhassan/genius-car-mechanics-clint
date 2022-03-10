import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        axios(`https://shrouded-falls-48196.herokuapp.com/services/${serviceId}`)
            .then(data => setService(data.data));
    }, [serviceId]);
    return (
        <div>
            <h1 className="border-bottom fw-bolder border-4 text-center text-primary border-primary mt-4 mb-3">Booking Service</h1>
            <div className="text-center border-4 border border-danger  m-4 p-2 ">
                <h6 className="text-success">Booking Successfully!!!</h6>
                <h2>{service?.name}</h2>
                <img style={{width: '75%', borderRadius: '10px'}}  src={service?.img} alt="" />
                <br />
                <Link to="/"  className="btn btn-primary m-3">Return Home</Link>
            </div>



        </div>
    );
};

export default Booking;