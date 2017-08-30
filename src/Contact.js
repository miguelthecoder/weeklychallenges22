import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div>
      <h1>Hello World {props.fname}</h1>
      <h2> You need to contact {props.fname} {props.lname} at {props.phone}</h2>
  </div>
  )
}



Contact.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};


export default Contact;
