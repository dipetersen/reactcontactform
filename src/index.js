import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/ManageContactPage';

import './index.css';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route name="contacts" path="contacts" component={ContactPage} />
    <Route name="addContact" path="contact" component={ManageContactPage} />
    <Route name="editContact" path="contact/:id" component={ManageContactPage} />
  </Router>
  , document.getElementById('root')
)


