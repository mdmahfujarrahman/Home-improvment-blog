import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../asset/favicon.png';

const Navbar = () => {
  return (
      <div className="navbar">
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
                  <Link className="link" to="/?category=kitchen-remodel">
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
                  <span>Mahfuj</span>
                  <span>Logout</span>
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