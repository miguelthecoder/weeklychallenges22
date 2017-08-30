import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ContactList from './ContactList'
import Buttons from './Buttons'

//  for challenges very easy to hard uncomment code bellow
// // ReactDOM.render(<ContactList />,
// // document.getElementById('root'));
ReactDOM.render(<Buttons />,
document.getElementById('root'));


registerServiceWorker();
