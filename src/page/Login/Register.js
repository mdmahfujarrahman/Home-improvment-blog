import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../asset/logo White.png";

const Register = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const hnadleChage = () => {
        // setUserData(prev => ...userData, [userData.e.key]: userData.e.value)
    };
    return (
        <div className="user-login-container">
            <div className="login-logo" data-aos="zoom-in-down">
                <img src={logoWhite} alt="logo" />
                <h1>Register</h1>
            </div>
            <form data-aos="zoom-in-down">
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={hnadleChage}
                />
                <input
                    required
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={hnadleChage}
                />
                <input
                    required
                    type="Password"
                    name="password"
                    placeholder="Password"
                    onChange={hnadleChage}
                />
                <button>Register</button>
                <div className="error-message">
                    <p>This is error</p>
                    <span>
                        Have you an account?{"  "}
                        <Link to="/login">Login</Link>{" "}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Register;
