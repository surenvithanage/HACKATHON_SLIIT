import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (

            <div className = "gallery">
                <div className="row">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">+Add new video or picture</button>
                </div>
                <div className="gallery">
                    <p><h2>Wonder of Asia</h2></p>
                </div>
                <div className="row">
                    <div className="slideshow" style={{ width : '850px'}}>
                        <Carousel  >
                            <div>
                                <img src="https://images.unsplash.com/photo-1534545872802-0579930815c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1544015759-237f87d55ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1515259387710-51e175f9ec6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className = "row">
                    <div class="col-md-4" >
                        <img className="img1" src = "https://images.unsplash.com/photo-1534545872802-0579930815c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"/>
                        <a href="" >Wild</a>
                    </div>
                    <div class="col-md-4">
                        <img className="img2" src = "https://images.unsplash.com/photo-1539576776193-2c07122e5fee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"/>
                        <a href="" >Activities</a>
                    </div>
                    <div class="col-md-4">
                        <img className="img3" src = "https://images.unsplash.com/photo-1537551080512-fb7dd14fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                        <a href="" >Heritage</a>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="file" />
                                <select>
                                    <option value="Wild.js">Wild</option>
                                    <option value="Activities.js">Activities</option>
                                    <option value="Heritage.js">Heritage</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default  Gallery;