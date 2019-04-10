import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import './navbar.css';
import About from '../about/about';
import Gallery from '../gallery/Gallery';
import Home from '../home/home';
import Hotel from '../hotel/hotel';

class Navbar extends Component{
    render() {
        return(
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Sri Lanka Tourism</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse subnavigation" id="navbarSupportedContent" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink to="/home" className="nav-link home" href="#">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/about" className="nav-link about" aria-readonly={"true"}>About Sri Lanka</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/gallery" className="nav-link about" aria-readonly={"true"}>Gallery</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Reservation
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink to="/hotel" className="dropdown-item" ><i className="fa fa-train"></i> Hotels</NavLink>
                                    <NavLink to="/travel-agent" className="dropdown-item" ><i className="fa fa-money"></i> Travel Agent</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Add-On Services
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="https://www.bbc.com/weather/0/1248991"><i className="fa fa-train"></i> Train</a>
                                    <a className="dropdown-item" href="https://www.xe.com/currencyconverter/"><i className="fa fa-money"></i> Currency Convertor</a>
                                    <a className="dropdown-item" href="http://www.visitsrilanka.net/"><i className="fa fa-car"></i> Meetings & Conference</a>
                                    <a className="dropdown-item" href="https://www.bbc.com/weather/0/1248991"><i className="fa fa-cloud"></i> Weather </a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link navhotline" href="#" aria-readonly={"true"}>Tourism Hotline : 1912</a>
                            </li>
                            <li className="nav-item dropdown language">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Language
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" href="#"><i className="fas fa-flag"></i> English</NavLink>
                                    <NavLink className="dropdown-item" href="#"><i className="fas fa-flag"></i>  German</NavLink>
                                    <NavLink className="dropdown-item" href="#"><i className="fas fa-flag"></i>  Spanish</NavLink>
                                    <NavLink className="dropdown-item" href="#"><i className="fas fa-flag"></i>  French</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Credentials
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink to="/login" className="dropdown-item" href="#"><i className="fa fa-user"></i>  Login</NavLink>
                                    <NavLink to="/register"  className="dropdown-item" href="#"><i className="fa fa-lock"></i>  Register</NavLink>
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>

                <Route exact path="/about" component={About}>
                </Route>


                <Route path="/gallery" component={Gallery}>
                </Route>

                <Route path="/home" component={Home}>
                </Route>

                <Route path="/hotel" component={Hotel}>
                </Route>
            </Router>
        )
    }
}

export  default Navbar;