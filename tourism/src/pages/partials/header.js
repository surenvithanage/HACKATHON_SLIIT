import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-caption">
                                    <h1 className="page-title">Sri Lanka Tourism</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-section search">
                    <div className="container">
                        <div className="card-block bg-white mb30">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <section className="search-sec">
                                        <div className="container">
                                            <form action="#" method="post" noValidate="novalidate">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                                <select className="form-control search-slt"
                                                                        id="exampleFormControlSelect1">
                                                                    <option>Select Pickup City</option>
                                                                    <option>Example one</option>
                                                                    <option>Example one</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                                <select className="form-control search-slt"
                                                                        id="exampleFormControlSelect1">
                                                                    <option>Select Drop City</option>
                                                                    <option>Example one</option>
                                                                    <option>Example one</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                                <select className="form-control search-slt"
                                                                        id="exampleFormControlSelect1">
                                                                    <option>Select Vehicle</option>
                                                                    <option>Example one</option>
                                                                    <option>Example one</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                                                <button type="button"
                                                                        className="btn btn-primary wrn-btn">Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
