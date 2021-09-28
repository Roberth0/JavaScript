import React from 'react';
import icon from './../img/icon.png';
import social from './../img/social.svg';
import Videos from './Videos'
import { Route, Link } from 'react-router-dom';


function Navbar({ logo }){
    return(
        <div className="container-navbar">
            <div><img src={icon} alt="icon"></img></div>
            <nav>
                <ul className="navbar">
                    <li>Inicio</li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><img src={logo} alt="logo"></img></li>
                    <li>Lenguages</li>
                    <li>Articulos</li>
                </ul>
            </nav>
            <Route path="/videos" exact component={Videos}/>
            <div><img src={social} alt="social media"></img></div>
      </div>
    )
}

export default Navbar;
