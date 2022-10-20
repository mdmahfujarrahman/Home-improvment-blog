
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import logoWhite from "../../asset/logo White.png";
import nextArrow from "../../asset/next-arrow.png";
import { CreateUser } from "../../util/authApi";

const Register = () => {
    const { setGlobal } = useContext(UserContext);

    useEffect(() => {
        const path = window?.location?.pathname;
        setGlobal({ pathName: path });
    }, []);

    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name: "",
    });


    const hnadleChage = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (userData.name && userData.email && userData.password) {
                const res = await CreateUser(userData);
                if(res.status === 200){
                    navigate("/login")
                }
            } else {
                toast.error("Enter Name, email and password");
            }
               
        } catch (err) {
            toast.error(err?.response?.data?.message);
        }
        
    }

    return (
        <div className="user-login-container">
            <div className="login-logo" data-aos="zoom-in-down">
                <img src={logoWhite} alt="logo" />
                <h1>Register</h1>
            </div>
            <form data-aos="zoom-in-down">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={hnadleChage}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={hnadleChage}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={hnadleChage}
                    required
                />
                <button onClick={handleSubmit}>Register</button>
                <div className="error-message">
                    <span>
                        Have you an account?{"  "}
                        <Link to="/login">Login</Link>{" "}
                    </span>
                </div>
            </form>
            <div>
                <Link className="extra-content" to="/">
                    <img src={nextArrow} alt="next Arrow" />
                    <p>Back to Home Page</p>
                </Link>
            </div>
        </div>
    );
};

export default Register;
