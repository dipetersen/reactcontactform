import React, {Component} from 'react';
import Header from './common/header';
import {RouteHandler} from 'react-router';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

export default App;
