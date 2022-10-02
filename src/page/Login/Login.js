import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from "../../asset/logo White.png";


const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const hnadleChage = () => {
        // setUserData(prev => ...userData, [userData.e.key]: userData.e.value)
    }
 
    return (
        <div className="user-login-container">
            <div className="login-logo" data-aos="zoom-in-up">
                <img src={logoWhite} alt="logo" />
                <h1>Login</h1>
            </div>
            <form data-aos="zoom-in-up">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={hnadleChage}
                />
                <input
                    type="Password"
                    name="password"
                    placeholder="Password"
                    onChange={hnadleChage}
                />
                <button>Log In</button>
                <div className="error-message">
                    <p>This is error</p>
                    <span>
                        Don't you have an account?{" "}
                        <Link to="/register">Register</Link>{" "}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;