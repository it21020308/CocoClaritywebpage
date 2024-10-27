// Navbar.js
import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../assets/Logo.png'; // Replace with your logo path
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

const Navbar = () => {
    const navigate = useNavigate();

    const items = [
        { label: 'Home', command: () => navigate('/') },
        { label: 'Domain', command: () => navigate('/domain') },
        { label: 'Features', command: () => navigate('/features') },
        { label: 'Milestone', command: () => navigate('/milestone') },
        { label: 'Resources', command: () => navigate('/resources') },
        { label: 'Team', command: () => navigate('/team') },
        { label: 'Contact', command: () => navigate('/contact') },
    ];

    return (
        <div className="navbar-container">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <Menubar model={items} className="navbar-menu" />
        </div>
    );
};

export default Navbar;

