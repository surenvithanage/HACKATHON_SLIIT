import React, { Component } from 'react';
import Header from "../partials/header";
import Places from '../partials/places';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Places/>
            </div>
        );
    }
}

export default App;
