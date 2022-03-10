import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service p-3">
            <img style={{ width: '100%', borderRadius: '20px' }} src={img} alt="" />
            <h3 className="mt-4 text-primary fw-bold">{name}</h3>
            <h5 className="text-primary">Price: {price}</h5>
            <p style={{ textAlign: 'justify', color: 'gray' }}>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary">Book Service ↗ </button>
            </Link>
        </div>
    );
};

export default Service;