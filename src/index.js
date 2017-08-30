import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ContactList from './ContactList'
import Button from './Buttons'


ReactDOM.render(<ContactList />,
document.getElementById('root'));

registerServiceWorker();
