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
      fname:"Teia",
      lname:"MCgee",
      phone:"55555555"
    }
  ];

  const contactsLoop = users.map(function(user){
    return <ContactList fname={user.fname} lname={user.lname} phone={user.phone} />
  })
  return (
  <div>
    {contactsLoop}
  </div>
);
}
}

export default ContactList;
