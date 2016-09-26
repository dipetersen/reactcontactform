import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function render() {
  var route = window.location.hash.substr(1);
  ReactDOM.render(
    <App route={route} />, document.getElementById('root')
  )
}

window.addEventListener('hashchange', render);
render();