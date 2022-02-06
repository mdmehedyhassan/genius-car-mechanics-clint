import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        axios(`https://shrouded-falls-48196.herokuapp.com/services/${serviceId}`)
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