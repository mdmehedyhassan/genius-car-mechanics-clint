import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 text-center col-sm-6 col-12 mt-3">
            <img style={{ width: '90%', borderRadius: "10px"}}  src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-primary">{expertize}</h5>
        </div>
    );
};

export default Expert;