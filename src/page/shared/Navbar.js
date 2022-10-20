import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../asset/favicon.png';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {user} = useAuth()
    const navigate = useNavigate()

    const handleLogout =() => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("accessToken");
        window.location.reload();
    }

 
  return (
      <div data-aos="fade-down" className="navbar">
          <div className="container">
              <div className="logo">
                  <Link to="/">
                      <img src={logo} alt="logo" />
                  </Link>
              </div>
              <div className="linkList">
                  <Link className="link" to="/?category=design">
                      <h6>Design</h6>
                  </Link>
                  <Link className="link" to="/?category=remodel">
                      <h6>Remodel</h6>
                  </Link>
                  <Link className="link" to="/?category=flooring">
                      <h6>Flooring</h6>
                  </Link>
                  <Link className="link" to="/?category=plumbing">
                      <h6>Plumbing</h6>
                  </Link>
                  <Link className="link" to="/?category=electrical">
                      <h6>Electrical</h6>
                  </Link>
                  <span>{user?.name}</span>
                  {user ? <span onClick={() => handleLogout()}>Logout</span> : <span onClick={() => navigate(`/login`)}>Login</span>}
                  <span className="write">
                      <Link className="link" to="/write">
                          Write
                      </Link>
                  </span>
              </div>
          </div>
      </div>
  );
}

export default Navbar