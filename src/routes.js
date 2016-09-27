import React, {Component} from 'react';
import {Route} from 'react-router';
import App from './App';
import Home from './common/homepage';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/ManageContactPage';
import NotFoundPage from './common/notFoundPage';

class routes extends Component {
  render() {
    return (
      <Route>
        <Route name="app" path="/" component={App} />
        <Route name="contacts" path="/contacts" component={ContactPage} />
        <Route name="addContact" path="/contact" component={ManageContactPage} />
        <Route name="editContact" path="/contact/:id" component={ManageContactPage} />
      </Route>
    );
  }
}
export default routes;
