import React, {Component} from 'react';
import Header from './common/header';
import { MemoryRouter, Match, Miss } from 'react-router'
import Home from './common/homepage';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/ManageContactPage';
import NotFoundPage from './common/notFoundPage.js';

class App extends Component {
  render() {
    return (
    <MemoryRouter>
      <div>
        <Header />
          <div className="container-fluid">
              <Match exactly pattern="/" component={Home} />
              <Match pattern="/contacts" component={ContactPage} />
              <Match pattern="/newcontact" component={ManageContactPage} />
              <Match pattern="/contact/:id" component={ManageContactPage} />
              <Miss component={NotFoundPage} />
          </div>
      </div>
    </MemoryRouter>
    )
  }
}

export default App;
