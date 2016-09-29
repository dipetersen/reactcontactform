import React, {Component} from 'react';
import Header from './common/header';
import { BrowserRouter, Match } from 'react-router'
import Home from './common/homepage';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/ManageContactPage';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Header />
          <div className="container-fluid">
              <Match exactly pattern="/" component={Home} />
              <Match pattern="contacts" component={ContactPage} />
              <Match pattern="contact" component={ManageContactPage} />
              <Match pattern="contact/:id" component={ManageContactPage} />
          </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
