import React, { Component } from 'react';

class Contact extends Component {
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

   const { fName, lName, phone } = this.props;
    const { isCallMade } = this.state;
    let iconColor = "orange";
    if (isCallMade) {
      iconColor = "green";
    }

   return (
      <div>
      <p className="sentence">You need to contact {fName} {lName} at {phone}<i className="fa-p fa fa-square" style={{color:iconColor}} /></p>
      <button type="button" onClick={this.handleClick}>Call</button>
      </div>
    );
  }

}
