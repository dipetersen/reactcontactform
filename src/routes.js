import React, {Component} from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute, hashHistory} from 'react-router';
import App from './app';
import Home from './common/homepage';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/manageContactPage';
import NotFoundPage from './notFoundPage';

class routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
          <DefaultRoute component={Home} />
          <Route name="contacts" component={ContactPage} />
          <Route name="addContact" path="contact" component={ManageContactPage} />
          <Route name="manageAuthor" path="contact/:id" component={ManageContactPage} />
          <NotFoundRoute component={NotFoundPage} />
        </Route>
      </Router>
    );
  }
}
export default routes;
