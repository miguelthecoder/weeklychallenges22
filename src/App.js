import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Button from './Buttons'

class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Contact fname="Miguel" lname="Hernandez" phone="(252) 452-5257"/>
      </div>
    );
  }
}


export default App;
