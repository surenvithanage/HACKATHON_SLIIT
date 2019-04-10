import  React,{Component} from 'react';
import './hotel.css';

class Hotel extends Component{

    render() {
        let side ={
            backgroundColor:'transparent',
            height:'100%',
            margin:'20px',

        }
        return(
            <div className="content">
                <div className="sidebarOptions">
                    <div className="card">
                        <div className="card-body" >
                            <div className="dropdown" style={side}>
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Location
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">Colombo</a></li>
                                    <li><a href="#">Kandy</a></li>
                                    <li><a href="#">Galle</a></li>
                                    <li><a href="#">Jaffna</a></li>

                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Price / Night
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#"> > $10</a></li>
                                    <li><a href="#">Greater Than $10</a></li>
                                    <li><a href="#">Greater Than $20</a></li>
                                    <li><a href="#">Greater Than $30</a></li>
                                    <li><a href="#">Greater Than $40</a></li>

                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Type
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><label><input type="checkbox"/> Star Hotel</label></li>
                                    <li><label><input type="checkbox"/> Cottage</label></li>
                                    <li><label><input type="checkbox"/> Villa</label></li>
                                    <li><label><input type="checkbox"/> Circuite Bunglows</label></li>
                                

                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    # of Occupants
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#"> > 2</a></li>
                                    <li><a href="#">Greater Than 2</a></li>
                                    <li><a href="#">Greater Than 5</a></li>
                                    <li><a href="#">Greater Than 10</a></li>


                                </ul>
                            </div>
                        </div>
                        <input type="button" value= "Search" onClick="#"/>
                    </div>


                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Grand Hotel</h5>
                                <img className="card-img" src="https://static.nashahotels.com/uploads/hotel/54330/photo/the-grand-hotel-2_15311327498.jpeg" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cinnamon Grand</h5>
                            <img className="card-img" src="http://exploresrilanka.lk/wp-content/uploads/2011/07/43B0703_1.jpg" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>

                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cinnamon Red</h5>
                            <img className="card-img" src="https://media-cdn.tripadvisor.com/media/photo-m/1280/16/7b/ac/5a/cinnamon-red-colombo.jpg" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Galadhari</h5>
                            <img className="card-img" src="data:image/jpeg;base64,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" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">JetWing Jaffna</h5>
                            <img className="card-img" src="https://t-ec.bstatic.com/images/hotel/max500/156/156472088.jpg" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Grand Kandyan</h5>
                            <img className="card-img" src="https://s-ec.bstatic.com/images/hotel/max1024x768/849/84970509.jpg" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Shangrila</h5>
                            <img className="card-img" src="https://s-ec.bstatic.com/images/hotel/max1024x768/120/120176876.jpg" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cinnamon Lake</h5>
                            <img className="card-img" src="data:image/jpeg;base64,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" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>
                <div className="hotels">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Avenra Garden</h5>
                            <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXZC07erR_fGtiz2mPCA8uliWS--aWBhPx6oJBh2SESo7fDyh" />

                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <ul className = "options">
                                <li>Type : Star Hotel</li>
                                <li>Tour Guide : Yes</li>
                                <li>Airport pickup : No</li>
                            </ul>
                            <a href="#" className="btn btn-primary">More Details</a>
                            <a href="#" className="btn btn-primary">Book Now</a>


                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Hotel;