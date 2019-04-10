import React, { Component } from 'react';
import './App.css';
import Footer from "./pages/partials/footer";
import Navbar from "./pages/partials/navbar";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>

        <Footer/>
      </div>
    );
  }
}

export default App;
