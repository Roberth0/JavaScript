import React from 'react';
import icon from './../img/icon.png';
import social from './../img/social.svg';
import Videos from './Videos'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from "./../App"


function Navbar({ logo }){
    return(
        <Router>
            <div className="container-navbar">
                <div><img src={icon} alt="icon"></img></div>
                <nav>
                    <ul className="navbar">
                        <li><Link strict to="/">Inicio</Link></li>
                        <li><Link strict to="/videos">Videos</Link></li>
                        <li><img src={logo} alt="logo"></img></li>
                        <li>Lenguages</li>
                        <li>Articulos</li>
                    </ul>
                </nav>
                <Switch>
                    {/* // <Route path="/videos" exact={true} component={Videos}/> */}
                    <Route path="/videos" exact={true} render={() => <h1>Test render</h1>}/>
                    <Router exact={true} path="/" component={App}/>
                </Switch>
                <div><img src={social} alt="social media"></img></div>
          </div>
        </Router>
    )
}

export default Navbar;
