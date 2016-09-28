import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/ManageContactPage';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/contacts" component={ContactPage} />
      <Route path="addContact" component={ManageContactPage} />
      <Route path="manageContact/:id" component={ManageContactPage} />
    </Route>
  </Router>
), document.getElementById('root'));
