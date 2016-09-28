import React, {Component} from 'react';
import Header from './common/header';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
