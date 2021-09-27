import React from 'react';
import icon from './../img/icon.png';
import social from './../img/social.svg';

function Navbar({ logo }){
    return(
        <div className="container-navbar">
            <div><img src={icon} alt="icon"></img></div>
            <ul className="navbar">
                <li>Inicio</li>
                <li>Videos</li>
                <li><img src={logo} alt="logo"></img></li>
                <li>Lenguages</li>
                <li>Articulos</li>
            </ul>
            <div><img src={social} alt="social media"></img></div>
      </div>
    )
}

export default Navbar;
