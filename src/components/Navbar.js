import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
    
                    <NavLink  exact to="/">Home</NavLink>
                    <NavLink exact  to="/about">About</NavLink>
                    <NavLink exact to="/portfolio">Portfolios</NavLink>
                    < NavLink  exact to="contact">Contact</NavLink>
                
                </nav>
        </div>
    )
}

export default Navbar;
