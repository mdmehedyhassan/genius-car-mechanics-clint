import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        axios(`http://localhost:5000/services/${serviceId}`)
        .then(data => setService(data.data));
    }, [serviceId])
    return (
        <div>
            <h2>{service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;