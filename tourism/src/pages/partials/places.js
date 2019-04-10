import React, { Component } from 'react';
import './places.css';

class Places extends Component {
    render() {
        return (
            <div className="Places">
                    <section id="team" className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src="http://www.srilanka.travel/images/sigiriya_rock.jpg"
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">Sigiriya</h4>
                                                        <p className="card-text">This is basic card with image on top,
                                                            title, description and button.</p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i
                                                            className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Sigiriya</h4>
                                                        <p className="card-text">Sri Lanka, the natures treasure chest is the home to one of the oldest civilizations in the world. Sri Lanka’s written history exceeds 2550 years. </p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src="https://www.yalasrilanka.lk/assets/img/slider/2.png"
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">Yala National Park</h4>
                                                        <p className="card-text">It’s an experience of epic proportions
                                                            that brings you up, close and personal with untamed world of wildlife.</p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i
                                                            className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Yala National Park</h4>
                                                        <p className="card-text">TSituated in Sri Lanka’s south-east hugging the panoramic Indian Ocean,
                                                            Yala was designated a wildlife sanctuary in 1900 and was designated a national park in 1938.
                                                            Yala is home to 44 varieties of mammal and 215 bird species.</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src="http://www.srilanka.travel/image/data/whales1.jpg"
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">Mirissa Whale Watching</h4>
                                                        <p className="card-text">See some of the oldest and the largest sea creatures, the humpback and the blue whales,
                                                            will nonchalantly  glide past you.</p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i
                                                            className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Mirissa Whale Watching</h4>
                                                        <p className="card-text">Embark on a whale/ dolphin watching excursion off the Southern, Eastern or
                                                            the West coast of Sri Lanka. The ideal locations for whale watching would be
                                                            Dondra Point (accessible from Galle, Hikkaduwa and Mirissa) and Trincomalee while the
                                                            sea off Kalpitiya teems with an abundance of dolphins.</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hakgala_Botanical_Garden.jpg/360px-Hakgala_Botanical_Garden.jpg"
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">Hakgala Botanical Garden</h4>
                                                        <p className="card-text">Hakgala Botanical Garden is one of the five botanical gardens in Sri Lanka.
                                                           It is the second largest garden in Sri Lanka.</p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i
                                                            className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Hakgala Botanical Garden</h4>
                                                        <p className="card-text">Hakgala Botanical Garden is situated on the Nuwara Eliya-Badulla main road, 16 km from Nuwara Eliya.
                                                            The garden has a cool temperate climate because of altitude is 5,400 feet above the sea level.
                                                            The mean annual temperature ranges between 16 °C to 30 °C during course of a year.
                                                            </p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Knuckles_Range.JPG/426px-Knuckles_Range.JPG"
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">Knuckles Mountain Range</h4>
                                                        <p className="card-text">The Knuckles Mountain Range lies in central Sri Lanka,
                                                            in the Districts of Matale and Kandy.  </p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i
                                                            className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Knuckles Mountain Range</h4>
                                                        <p className="card-text">he Knuckles Mountain Range lies in central Sri Lanka, in the Districts of Matale and
                                                            Kandy. The range takes its name from a series of recumbent folds and peaks in the west of the massif which resemble the knuckles of
                                                            clenched fist when viewed from certain locations in the Kandy District. </p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Nillaveli_Beach.JPG/375px-Nillaveli_Beach.JPG"
                                                                alt="card image"/></p>
                                                        <h4 className="card-title">Nilaveli Beach</h4>
                                                        <p className="card-text">Nilaveli ,is a coastal resort town and suburb of the Trincomalee District,
                                                            Sri Lanka located 16 km northwest of the city of Trincomalee. .</p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i
                                                            className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Nilaveli Beach</h4>
                                                        <p className="card-text"> A historically popular Tamil village and tourist destination of the district
                                                            alongside the nearby Uppuveli. Pigeon Island National Park,
                                                            one of the two marine national parks of the region is situated 1 km off the coast of Nilaveli,
                                                            its many species of vegetation, coral and reef fish contributing to Nilaveli's rich biodiversity.</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center"
                                                                   target="_blank" href="#">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Places;