import React, { Component } from 'react';
import './App.css';
import Header from "./pages/partials/header";
import Footer from "./pages/partials/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
