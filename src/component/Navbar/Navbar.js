import React from 'react';
import logo from './pokemon.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <img src={logo} className="mx-auto d-block p-3" style={{height: "150px"}} loading="lazy" alt="logo"/>
        </nav>
    )
}

export default Navbar;