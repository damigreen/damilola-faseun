import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const rootEle = document.getElementById('root');

let render = () => {
  const App = require('./App').default;

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEle
  );

}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();
reportWebVitals();