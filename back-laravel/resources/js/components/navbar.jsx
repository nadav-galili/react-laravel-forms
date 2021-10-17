import React from "react";
 import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React-Laravel App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                 Form List Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/form-builder">
                  Form Builder Page
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
