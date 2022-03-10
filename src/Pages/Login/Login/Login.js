import React from 'react';
import useAuth from './../../../hooks/useAuth';
import loginSvg from '../../../images/svg/login.svg';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="text-center">
            <h2 className="mt-4 text-primary border-bottom border-4 border-primary mb-3">Login and Get Services</h2>
            <button onClick={signInUsingGoogle} className="btn rounded-pill btn-primary">Google Sign In</button>
            <br />
            <img className="w-75 mt-3" src={loginSvg} alt="" />
        </div>
    );
};

export default Login;