import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo1.png";
import './header.css';

const Header = ({ isLoggedIn, onLogout }) => (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body custom-nav" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>  
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;