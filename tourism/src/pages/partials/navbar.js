import React , {Component} from 'react';

class Navbar extends Component{
    render() {
        return(
            <div className= "container">
                <nav className="navbar navbar-default navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="logo" href="#"><img src= '#'/></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Home</a></li>
                               <li> <a href='#' className="dropdown-toggle" data-toggle = "dropdown">About Sri Lanka</a>
                                {/*<span className="caret"></span>*/}
                                <ul className="dropdown-menu">
                                    <li><a href="#">Photo Galary</a></li>
                                    <li><a href="#">Festivals</a></li>
                                    <li><a href="#">Special Events</a></li>
                                </ul>
                               </li>

                                <li><a href='#' className="dropdown-toggle" data-toggle = "dropdown">Reservation</a>
                                {/*<span className="caret"></span>*/}
                                <ul className="dropdown-menu">
                                    <li><a href="#">Hotels</a></li>
                                    <li><a href="#">Tour Guids</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }



}

export  default Navbar;