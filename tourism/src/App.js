import React, { Component } from 'react';
import './App.css';
import Header from "./pages/partials/header";
import Footer from "./pages/partials/footer";
import Places from "./pages/partials/places";
import Navbar from "./pages/partials/navbar";
import Hotel from "./pages/hotel/hotel";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        {/*<Header/>*/}
        {/*<Places/>*/}
        <Hotel/>
        <Footer/>
      </div>
    );
  }
}

export default App;
