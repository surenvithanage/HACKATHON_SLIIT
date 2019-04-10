import React , {Component} from 'react';
import './navbar.css';


class Navbar extends Component{
    render() {
        return(
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
                            <a className="nav-link home" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link about" href="#" aria-readonly={"true"}>About Sri Lanka</a>
                        </li>
                        {/*<li className="nav-item ">*/}
                            {/*<a className="nav-link reservation" href="#" aria-readonly={"true"}>Reservations</a>*/}
                        {/*</li>*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Reservation
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="../hotel/hotel.js"><i className="fa fa-train"></i> Hotels</a>
                                <a className="dropdown-item" href="#"><i className="fa fa-money"></i> Currency Convertor</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               Add-On Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><i className="fa fa-train"></i> Train</a>
                                <a className="dropdown-item" href="#"><i className="fa fa-money"></i> Currency Convertor</a>
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
                                <a className="dropdown-item" href="#"><i className="fas fa-flag"></i> English</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-flag"></i>  German</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-flag"></i>  Spanish</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-flag"></i>  French</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Credentials
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><i className="fa fa-user"></i>  Login</a>
                                <a className="dropdown-item" href="#"><i className="fa fa-lock"></i>  Register</a>
                            </div>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }



}

export  default Navbar;