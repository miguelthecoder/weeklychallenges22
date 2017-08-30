import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';


class ContactList extends React.Component {
  render(){
    const users=[{
      fname:"Miguel",
      lname:"Hernandez",
      phone:"33333333"
    },
    {
      fname:"Chris",
      lname:"Hamilton",
      phone:"55555555"
    },
    {
      fname:"Malik",
      lname:"Robinson",
      phone:"4444444"
    },
  ];

  const contactComponets = users.map(function(user){
    return <Contact fname={user.fname} lname={user.lname} phone={user.phone} />
  })
  return (
  <div>
    {contactComponets}
  </div>
);
}
}

export default ContactList;
