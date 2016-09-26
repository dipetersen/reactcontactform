import React, {Component} from 'react';
import Header from './common/header';
import Home from './common/homepage';
import ContactPage from './contacts/ContactPage';
import ContactForm from './contacts/ContactForm';


class App extends Component {
  render() {
    let Child;
    switch(this.props.route) {
      case 'contacts': Child = ContactPage; break;
      case 'addcontact': Child = ContactForm; break;
      default: Child = Home;
    }

    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Child />
        </div>
      </div>
    );
  }
}

export default App;
