import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList'
import Contact from './Contact';


class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isCallMade: false,
    };
  }


 handleClick() {
    this.setState({
      isCallMade: true,
    })
  }

 render() {

   const { fname, lname, phone } = this.props;
    const { isCallMade } = this.state;
    let iconColor = "orange";
    if (isCallMade) {
      iconColor = "green";
    }
    // check isCallMade value and set value of background color var accordingly
    // use color var for icon color

   return (
      <div>
      <p className="sentence">You need to contact {fname} {lname} at {phone}<i className="root" style={{color:iconColor}} /></p>
      <button type="button" onClick={this.handleClick}>Call</button>
      </div>
    );
  }

}

export default Button;
