import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios('https://shrouded-falls-48196.herokuapp.com/services')
            .then(data => setServices(data.data))
            .catch(error => {
                if(window.confirm('Please click OK or reload this page')){
                    window.location.reload();
                }
            })
    }, []);

    return (
        <div id="services">
            <h2 className="text-primary mt-5 mb-4 text-center mb-3 border-bottom border-5 border-primary">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;