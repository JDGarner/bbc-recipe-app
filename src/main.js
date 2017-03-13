import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/views/app';
import './stylesheets/index.scss';

window.addEventListener('load', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app-container')
  );
});
