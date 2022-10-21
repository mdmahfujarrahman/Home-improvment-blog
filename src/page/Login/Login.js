import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import logoWhite from "../../asset/logo White.png";
import nextArrow from "../../asset/next-arrow.png";
import { LoginUser } from '../../util/authApi';


const Login = () => {
    const {  setGlobal } = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {
        const path = window?.location?.pathname;
        setGlobal({ pathName: path }); 
    },[])
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [spin, setSpin] = useState(false);

    const hnadleChage = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        setSpin(true)
        e.preventDefault();
        try {
            if (userData.email && userData.password) {
                const res = await LoginUser(userData);
                toast.success("Time to explore");
                localStorage.setItem("accessToken", res.data.token);
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify(res.data.userData)
                );
                if (res.status === 200) {
                    navigate("/");
                    setSpin(false);
                }


            } else {
                toast.error("Enter email and password");
            }
        } catch (err) {
            setSpin(false);
            toast.error(err?.response?.data?.message);
        }
    };

 
    return (
        <div className="user-login-container">
            <div className="login-logo" data-aos="zoom-in-up">
                <img src={logoWhite} alt="logo" />
                <h1>Login</h1>
            </div>
            <form data-aos="zoom-in-up">
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
                <button onClick={handleSubmit}>
                    Log In
                </button>
                <div className="error-message">
                    <span>
                        Don't you have an account?{" "}
                        <Link to="/register">Register </Link>{" "}
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

export default Login;