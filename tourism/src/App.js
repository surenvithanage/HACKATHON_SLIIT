import React, { Component } from 'react';
import './App.css';
import Header from "./pages/partials/header";
import Footer from "./pages/partials/footer";
import Places from "./pages/partials/places";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Places/>
        <Footer/>
      </div>
    );
  }
}

export default App;
